#! /usr/bin/bash

# Load config & functions
. ${HOME}/ayo.conf
. ${scripts_dir}/functions.sh

command=$1
journal_dir="${notes_dir}/Journal"
month_dir=$(date +"%m %b")

getopts "t" typora; #check if -t flag is given

file_name=$(date +'%m.%d.%Y').md
full_path="${journal_dir}/${month_dir}/${file_name}"

function createEntry() {
  {
    # IF Not Exists: create file & echo date
    if ! test -f "$full_path"; then
      install -Dv /dev/null "$full_path" >/dev/null
      # TODO: update to correct heading from old entries
      date_heading=$(date +'%b %d, %Y, %a %r')
      echo $date_heading > "$full_path"
    fi

    # Open in editor
    if [ "$typora" = "t" ]; then
      typora "$full_path"
    else
      vim "$full_path"
    fi
  } || {
    # Report; TODO: write log
    echo ">>> " $full_path
  }
}

notesSync
if [ "$1" = "append" ]; then
  {
    read -p "Add thought: " thought
    time=$(date +'%r')
    echo $'\n'\> $thought \[$time\] >> "$full_path"
    clear
  } || {
    echo ">>> Append failed"
  }

## COPY content a note from a list
elif [ "$1" = "copy" ] || [ "$1" = "c" ]; then
  echo  "Copied content of $full_path"
  xclip -sel c < "$full_path"

## New entry or edit
else
  createEntry
  clear
fi
notesSync
