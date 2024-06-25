import { Result, Err, Ok, ResultType} from "./result"
import { assertNotNull} from "./utils"

export function get_button(id: string): Result<HTMLButtonElement, Error> {
  return get_element<HTMLButtonElement>("BUTTON", id);
}

export function get_text_area(id: string): Result<HTMLTextAreaElement, Error> {
  return get_element<HTMLTextAreaElement>("TEXTAREA", id);
}

enum ErrorType {
  DoesntExist,
  IncorrectType
}

interface Error {
  type: ErrorType,
  msg: string
}

function IncorrectType(msg: string): Error {
  return {
    type: ErrorType.IncorrectType,
    msg: msg
  };
}

function DoesntExist(msg: string): Error {
  return {
    type: ErrorType.DoesntExist,
    msg: msg
  };
}

function get_element<T extends HTMLElement>(tag: string, id: string): Result<T, Error> {
  function is_tag_type(elem: HTMLElement): elem is T {
    return elem.tagName === tag
  }

  const elem = assertNotNull(document.getElementById(id));
  if(elem.type === ResultType.Err) {
    return Err(DoesntExist(`document ${id} doesn't exist`));
  }

  if(is_tag_type(elem.value)) {
    return Ok(elem.value);
  } else {
    return Err(IncorrectType(`element ${id} has tag type: ${elem.value.tagName}. Expecting: ${tag}`));
  }
}

