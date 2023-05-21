import React from 'react'

function ChooseText({text}) {
  return (
      <li className="pb-4 list-disc marker:text-[#66CC8A] marker:text-2xl">
          {text.text}
    </li>
  );
}

export default ChooseText