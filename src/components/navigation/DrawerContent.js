export function getDrawerContent(content) {
  switch (content) {
    case "dicussion":
      break;

    default:
      return (
        <ul className="px-2 bold text-center">
          <li className="py-2">Hide from me</li>
          <li className="py-2">Go to profile</li>
          <li className="py-2">Copy link</li>
          <li className="py-2 text-danger ">Report</li>
          <li className="py-2 text-danger">Close</li>
        </ul>
      );
  }
}
