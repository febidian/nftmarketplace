import React from "react";

function Note(props) {
  return (
    <>
      <svg
        className="w-6 h-6"
        viewBox="0 0 21 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.3175 8.21441H16.2576C16.0547 8.21441 15.8602 8.295 15.7167 8.43846C15.5732 8.58191 15.4927 8.77649 15.4927 8.97937C15.4927 9.18225 15.5732 9.37682 15.7167 9.52028C15.8602 9.66373 16.0547 9.74433 16.2576 9.74433H18.1759C18.3839 9.74433 18.5525 9.91294 18.5525 10.1209V16.629C18.5518 17.2374 18.3098 17.8207 17.8796 18.251C17.4494 18.6812 16.8661 18.9232 16.2576 18.9239C15.6491 18.9234 15.0657 18.6814 14.6354 18.2512C14.2052 17.8209 13.9632 17.2375 13.9627 16.629V1.32975C13.9627 1.12687 13.8821 0.932299 13.7387 0.788841C13.5952 0.645383 13.4006 0.564789 13.1978 0.564789H0.958382C0.755502 0.564789 0.560931 0.645383 0.417472 0.788841C0.274014 0.932299 0.19342 1.12687 0.19342 1.32975C0.19342 1.53263 0.274014 1.7272 0.417472 1.87066C0.560931 2.01412 0.755502 2.09471 0.958382 2.09471H12.0562C12.2642 2.09471 12.4328 2.26332 12.4328 2.47131V16.629C12.431 17.2034 12.5597 17.7672 12.8051 18.2794C12.9393 18.5596 12.7522 18.9239 12.4415 18.9239H4.01823C3.40974 18.9234 2.82632 18.6814 2.39606 18.2512C1.96579 17.8209 1.72385 17.2375 1.72334 16.629V4.3896C1.72334 4.18672 1.64275 3.99215 1.49929 3.84869C1.35583 3.70523 1.16126 3.62464 0.958382 3.62464C0.755502 3.62464 0.560931 3.70523 0.417472 3.84869C0.274014 3.99215 0.19342 4.18672 0.19342 4.3896V16.629C0.19342 17.6434 0.59639 18.6162 1.31368 19.3335C2.03097 20.0508 3.00383 20.4538 4.01823 20.4538H16.2576C17.2717 20.4526 18.2438 20.0492 18.9608 19.3322C19.6779 18.6152 20.0812 17.643 20.0824 16.629V8.97937C20.0824 8.77649 20.0018 8.58191 19.8584 8.43846C19.7149 8.295 19.5203 8.21441 19.3175 8.21441Z"
          fill="url(#paint0_linear_1695_200)"
        />
        <path
          d="M4.01823 6.68448H10.1379C10.3408 6.68448 10.5354 6.60389 10.6788 6.46043C10.8223 6.31697 10.9029 6.1224 10.9029 5.91952C10.9029 5.71664 10.8223 5.52207 10.6788 5.37861C10.5354 5.23515 10.3408 5.15456 10.1379 5.15456H4.01823C3.81535 5.15456 3.62078 5.23515 3.47732 5.37861C3.33386 5.52207 3.25327 5.71664 3.25327 5.91952C3.25327 6.1224 3.33386 6.31697 3.47732 6.46043C3.62078 6.60389 3.81535 6.68448 4.01823 6.68448Z"
          fill="url(#paint1_linear_1695_200)"
        />
        <path
          d="M4.01823 9.74432H10.1379C10.3408 9.74432 10.5354 9.66373 10.6788 9.52027C10.8223 9.37681 10.9029 9.18224 10.9029 8.97936C10.9029 8.77648 10.8223 8.58191 10.6788 8.43845C10.5354 8.295 10.3408 8.2144 10.1379 8.2144H4.01823C3.81535 8.2144 3.62078 8.295 3.47732 8.43845C3.33386 8.58191 3.25327 8.77648 3.25327 8.97936C3.25327 9.18224 3.33386 9.37681 3.47732 9.52027C3.62078 9.66373 3.81535 9.74432 4.01823 9.74432Z"
          fill="url(#paint2_linear_1695_200)"
        />
        <path
          d="M4.01823 12.8042H10.1379C10.3408 12.8042 10.5354 12.7236 10.6788 12.5801C10.8223 12.4367 10.9029 12.2421 10.9029 12.0392C10.9029 11.8363 10.8223 11.6418 10.6788 11.4983C10.5354 11.3548 10.3408 11.2742 10.1379 11.2742H4.01823C3.81535 11.2742 3.62078 11.3548 3.47732 11.4983C3.33386 11.6418 3.25327 11.8363 3.25327 12.0392C3.25327 12.2421 3.33386 12.4367 3.47732 12.5801C3.62078 12.7236 3.81535 12.8042 4.01823 12.8042Z"
          fill="url(#paint3_linear_1695_200)"
        />
        <path
          d="M5.54816 14.3341C5.34528 14.3341 5.15071 14.4147 5.00726 14.5581C4.8638 14.7016 4.7832 14.8962 4.7832 15.0991C4.7832 15.3019 4.8638 15.4965 5.00726 15.64C5.15071 15.7834 5.34528 15.864 5.54816 15.864H8.60801C8.81089 15.864 9.00546 15.7834 9.14892 15.64C9.29238 15.4965 9.37297 15.3019 9.37297 15.0991C9.37297 14.8962 9.29238 14.7016 9.14892 14.5581C9.00546 14.4147 8.81089 14.3341 8.60801 14.3341H5.54816Z"
          fill="url(#paint4_linear_1695_200)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1695_200"
            x1="1.22216"
            y1="1.89072"
            x2="22.4459"
            y2="7.12314"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6763FD" />
            <stop offset={1} stopColor="#B84EF1" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_1695_200"
            x1="3.64894"
            y1="5.25655"
            x2="7.08579"
            y2="9.49308"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6763FD" />
            <stop offset={1} stopColor="#B84EF1" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_1695_200"
            x1="3.64894"
            y1="8.3164"
            x2="7.08579"
            y2="12.5529"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6763FD" />
            <stop offset={1} stopColor="#B84EF1" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_1695_200"
            x1="3.64894"
            y1="11.3762"
            x2="7.08579"
            y2="15.6128"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6763FD" />
            <stop offset={1} stopColor="#B84EF1" />
          </linearGradient>
          <linearGradient
            id="paint4_linear_1695_200"
            x1="5.0206"
            y1="14.4361"
            x2="8.37899"
            y2="16.92"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6763FD" />
            <stop offset={1} stopColor="#B84EF1" />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
}

export default Note;