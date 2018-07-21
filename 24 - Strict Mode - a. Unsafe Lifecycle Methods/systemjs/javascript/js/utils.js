/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

export function logEvent(value) {
  let events = document.getElementById('events');
  let newEvent = document.createTextNode(value);
  let item = document.createElement('li');
  item.appendChild(newEvent);
  events.appendChild(item);
}
