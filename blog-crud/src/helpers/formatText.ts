export function replaceHyphenToSpace(title: string) {
  return title.replace(/-/g, ' ')
}

export function replaceSpaceToHyphen(title: string) {
  return title.replace(/ /g, '-')
}
