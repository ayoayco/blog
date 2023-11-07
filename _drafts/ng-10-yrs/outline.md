# Outline: Frontend Lessons from a Decade of Angular 


I. Introduction
  - In this article, we go through the past ten years of Angular's evolution to look at both the good and bad parts, and we will ask what are the lessons we can apply not just in Angular development, but in the larger Frontend Web Development in general.


II. A brief history of Angular and the Web

- It was a time when decoupled architecture was not yet a popular thing, and we did everything on the server including rendering full pages. I remember first hearing the words "all the business logic is in the browser" and go "what is this guy talking about?" 

- Since then, Web Development has also grown in its capabilities.

- Angular has grown side by side with the web.

    
III. Angular: The Good, The Bad, The Lessons
- Global Automatic Change Detection 
  1. Like Magic!
      - Awesome Developer Experience, we don't have to remember which state to track and how. "It just works"
  2. Very Costly
      - Under the hood, angular has to load and run zone.js before the app
      - Any browser event will trigger a check for the whole component tree
  3. Performance Fix
      - Angular provides a way to opt out of this default costly behavior. In reality, a lot of teams didn't make this decision to optimize their apps from the start causing a lot of rewrites and refactors only when the users and businesses both the performance hit.
  4. Lesson
      - When designing a solution, we should ask whether the default behavior will scale well. Do we assume our users know when they should opt-out? Do we design the solution such that they are well informed of the performance costs and the deciions they have to make?

- 

# Recources
ng conf 2022 talk: https://www.youtube.com/watch?v=IY-QOz4oLCE&ab_channel=ng-conf


