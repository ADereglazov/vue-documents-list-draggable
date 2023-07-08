export default function modifyMatchText(text, subString) {
  const regex = new RegExp(subString, "gi");

  if (text.match(regex)) {
    return text.replace(
      regex,
      (str) =>
        "<span style='color: #ff1744; background-color: #ffff00'>" +
        str +
        "</span>"
    );
  }

  return text;
}
