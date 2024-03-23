import {React, useState} from 'react';
import { LuCopyCheck } from "react-icons/lu";
import copyTxt from '../assets/img/copyTxt.png';
import star from '../assets/img/star.png';

export default function CopyToClipboard() {
    const [textToCopy, setTextToCopy] = useState('BeqKgf3QYcPPXc1vLFxrL9BHocRFugeecNX4dWQ7HW5f');
    const [isCopied, setIsCopied] = useState(false);
    const handleCopyToClipboard = () => {
        navigator.clipboard.writeText(textToCopy)
          .then(() => {
            setIsCopied(true);
          })
          .catch(err => {
            console.error('Failed to copy to clipboard: ', err);
          });
      };
  return (
    <div className="copytoclipboard-inner">
        <figure className='star'>
            <img src={star} alt="" />
        </figure>
        <div className="copytoclipboard">
            <span className='c_title'>Contract:</span> 
            <input readOnly type="text"  value={textToCopy}
                onChange={(e) => setTextToCopy(e.target.value)}/>
            <button onClick={handleCopyToClipboard}>
                {!isCopied && (
                <span>
                    <img src={copyTxt} alt="Copy Text" />
                </span>
                )}
                {isCopied && (
                <span className='copyed'>
                    <LuCopyCheck />
                </span>
                )}
            </button>
        </div>
    </div>
    
  )
}
