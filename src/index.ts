import { get_button, get_text_area } from "./dom_finder";
import { ResultType } from "./result";

document.addEventListener("DOMContentLoaded", function() {
  const button = get_button("myButton");
  if(button.type === ResultType.Ok) {
    button.value.addEventListener('click', on_click_submit);
  } else {
    throw button.value;
  }
});

function on_click_submit(): void {
  alert(`Button was clicked!.`);
  const data = get_text_area('query_data');
  const query = get_text_area('query_string');
  if(data.type === ResultType.Err) {
    throw data.value;
  }
  if(query.type === ResultType.Err) {
    throw query.value;
  }
  console.log(data.value, query.value);
}


