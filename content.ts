import "styles/contents.scss"
import { addSyllabusLinkToCourseCode } from "~handlers/addSyllabusLinkToCourseCode"
import { colorizeAssignments } from "~handlers/colorizeAssignMents"
import { skipExternalLinkConfirmation } from "~handlers/skipExternalLinkConfirmation"

skipExternalLinkConfirmation()
colorizeAssignments()
addSyllabusLinkToCourseCode()