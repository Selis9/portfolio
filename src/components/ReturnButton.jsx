import { FaArrowUp } from 'react-icons/fa';

const ReturnToTop = () => {
  return (
    <div className="fixed bottom-16 right-10 z-50 bg-blue-200 rounded-full justify-center items-center p-2"
    >
      <a href="#top"><FaArrowUp className="w-12 h-12 text-black"/></a>
    </div>
  )
}

export default ReturnToTop;