export default function escapesh(input) {
  return "'" + input.replaceAll("'", "'\\''") + "'";
}
