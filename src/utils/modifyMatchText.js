export default function modifyMatchText(text, subString) {
  const match = text.toLowerCase().indexOf(subString.toLowerCase());

  if (~match) {
    const textSubstr = text.substring(match, subString.length + match);
    return text.replace(
      textSubstr,
      "<span style='color: #ff238d'>" + textSubstr + "</span>"
    );
  }

  return text;
}
