import Image from 'next/image';
import { PropagateLoader } from 'react-spinners';
import faviconImage from '../../public/favicon.jpg';

const Loader = () => {
  return (
    <>
      <div className="fixed left-1/2 top-1/2 z-[100] grid h-svh w-svw -translate-x-1/2 -translate-y-1/2 place-items-center">
        <div className="grid place-items-center gap-8">
          <div className="grid place-items-center gap-1">
            <Image
              src={faviconImage}
              className=""
              alt="Logo"
              width="100"
              height="100"
            />
            <p className="font-semibold text-black">Work Wise</p>
          </div>
          <PropagateLoader size={10} speedMultiplier={0.9} />
        </div>
      </div>
    </>
  );
};

export default Loader;
