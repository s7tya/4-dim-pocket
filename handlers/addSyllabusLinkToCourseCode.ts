import dayjs from "dayjs"

export const addSyllabusLinkToCourseCode = () => {
  const courseCodeEl: Element | undefined = document.querySelector(".pageheader-course-coursename .coursecode")
  const courseCode = courseCodeEl?.textContent

  if (!courseCode) {
    return
  }

  const anchor = document.createElement("a")
  const year = dayjs().format("YYYY")
  anchor.href = `https://kdb.tsukuba.ac.jp/syllabi/${year}/${courseCode}/jpn`
  anchor.textContent = courseCode
  anchor.target = "_blank"
  anchor.rel = "noreferrer noopener"
  anchor.className = "coursecode"

  courseCodeEl.parentNode.prepend(anchor)
  courseCodeEl.remove()
}