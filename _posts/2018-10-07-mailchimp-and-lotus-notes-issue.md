---
title: "Mailchimp + Lotus Notes Solution for HTML Email Campaigns"
permalink: /mailchimp-lotus-notes-fix/
category: projects
description: Notes on how I fixed a client's problems with MailChimp and Lotus Notes
published: true
---

I had a client once using one WYSIWYG (What You See Is What You Get) tool for designing HTML Email campaigns... but they are not getting the results they want to see. The HTML email designs are chaotic when received in their readers' computers.<!--more-->

## The Problem

The client's readers use Lotus Notes for reading their emails. The problem is, Lotus Notes may not always display HTML emails as expected. Instead, it displays HTML emails in a proprietary rich-text format. This means that Lotus Notes, as an email reader, uses its own standards in rendering HTML emails that is quite different compared to all other popular email readers (i.e., Gmail, Outlook, etc.).

There are HTML elements that Lotus Notes simply does not understand. To make things more complicated, different versions of Lotus Notes have different rendering standards. This means that creating an HTML email template that works for one Lotus Notes version does not guarantee it will work on others.

This is why HTML Email designers hate Lotus Notes the most--pretty much like Internet Explorer for Web Developers.


## Findings on Lotus Notes HTML email rendering

Lotus Notes has several issues with widely accepted HTML standards because of its own proprietary rich-text formatting. Here are some of these issues that can be found if you search the web:
- COLSPANS. These are attributes of table cells to tell the email client or the browser how many columns they span over. Lotus Notes cannot seem to understand this and we might need to just use multiple tables as a workaround.
- CENTER ALIGNMENT. Using `<TABLE ALIGN="CENTER">` worked great in Lotus Notes 6.5.3. But not at all in Lotus Notes 6.5.4. Also, `<CENTER>` tags around the tables didn’t work in 6.5.4 either. We can make things simpler as a workaround so they'd look okay as left-aligned in 6.5.4.


## Other Possible Workarounds and Good Practice
Here are some helpful tips in designing HTML emails for Lotus Notes:
- Use Mail Chimp's `*|ARCHIVE|*` merge tag to automatically generate a link to the online version of your MailChimp campaign. Subscribers can click this link to view your campaign directly in their web browsers.
- Allow your subscribers to choose which version of your campaign they want to receive when they sign up to your list: HTML, Text, or Mobile. If they have difficulty viewing HTML email, they can select the Text option instead.
- Keep your designs simple so that if they fail, your email is still readable.

## Suggestion on Campaign Creation Workflow
The WYSIWYG tool I mentioned earlier, is one that is provided by Mailchimp. This tool is great. I recommend it... if your readers' does not use Lotus Notes.

Mailchimp’s Drag and Drop tool for creating Email Campaigns generates HTML code that tries to make the campaign look good in many popular email programs. Unfortunately, Lotus Notes does not play well with most of these programs’ HTML rendering standards.

To make sure the Campaign will look good in Lotus Notes, we have to clean up the code that Mailchimp generates.

Follow these steps to clean up the HTML email design:
- Save Campaign as Template. To do this, Go to Campaigns page, Edit your Campaign, then click “Save as Template”. This is necessary because Mailchimp only allows Exporting to HTML from Templates.
- Export Template to HTML. Once the Campaign is saved as a Template you can now export it into HTML code that we can clean up. Go to Templates page, click the dropdown button beside the Edit button on the Template, then select “Export as HTML”
- Clean Up the HTML Code. Once you select the “Export as HTML” option, a file will be downloaded to your computer. Open this file in a Text Editor then do the following:
- Add Lotus Notes specific elements.
- In the HTML code you downloaded, you will most probably find a line with this code: `<!--[if gte mso 9]>` … replace all occurrence with `<!--[if (gte mso 9)|(IE)]>`
- Lotus notes Microsoft’s Internet Explorer (IE) to render HTML emails.
- Remove style rules intended for smartphones.
- In the HTML code, if you find @media{ … } rules inside the `<style> ... </style>` tags, you may remove it.
- These @media{ ... } rules are intended for smartphones and may not play well with Lotus Notes.
- Make CSS style rules inline. As much as possible, apply style rules found inside the `<style> ... </style>` tags as inline styles to the elements. As of writing this blog, Mailchimp has an automatic inline feature to do this. Just check the checkbox in the design settings and Mailchimp will automatically do this for you.
- Upload the Clean HTML Code into Mailchimp. Once you have done the cleaning up steps, you can go back to Mailchimp then create a Campaign using the new HTML Email. Create a Campain then choose HTML Email, then paste the code from the Text Editor you used.
- Test the how the HTML Email looks. Mailchimp provides a paid feature called Inbox Preview to see how the HTML Email renders in several popular Email programs. If you are on a free account, you can use Preview Mode instead. Another option is opening an account in Litmus (http://litmus.com) which gives you screenshots of the HTML Email rendered in various Email Programs (including versions of Lotus Notes).

