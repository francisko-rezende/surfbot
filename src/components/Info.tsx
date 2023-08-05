import { Container } from "./Container";
import { Ellipsis } from "./Ellipsis";
import { HowToArriveListItem } from "./HowToArriveListItem";

const FlipFlops = () => (
  <svg width="51" height="53" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g fillRule="evenodd" clipRule="evenodd" fill="#18E">
      <path d="M11.637 9.195a1.094 1.094 0 0 0-.804.313s-4.156 4.07-6.13 6.397c-1.177 1.386-2.625 2.821-3.527 4.74C.488 22.112-.044 23.79.02 25.549c.06 1.655.735 3.109 1.361 4.369.965 1.938 3.31 4.711 3.31 4.711a1.088 1.088 0 0 0 1.158.35 1.09 1.09 0 0 0 .769-.931 1.08 1.08 0 0 0-.243-.795s-2.37-2.948-3.041-4.296c-.598-1.202-1.1-2.395-1.14-3.484-.046-1.26.36-2.636.957-3.908.691-1.47 1.967-2.79 3.216-4.262 1.554-1.833 4.28-4.51 5.168-5.39.802.903 2.984 3.322 4.114 5.004 1.1 1.639 2.178 3.219 2.65 4.869.452 1.579.585 3.3.31 4.88-.173.998-.65 2.017-1.271 2.93-.266.391-.967 1.116-1.57 1.672-.602.556-1.11.974-1.11.974a1.088 1.088 0 0 0-.347 1.155 1.085 1.085 0 0 0 .94.761 1.096 1.096 0 0 0 .798-.244s.549-.458 1.2-1.059c.65-.6 1.395-1.314 1.892-2.044.75-1.1 1.373-2.374 1.617-3.772.34-1.95.169-3.975-.366-5.842-.605-2.115-1.846-3.861-2.93-5.478-1.568-2.333-5.054-6.159-5.054-6.159a1.088 1.088 0 0 0-.77-.36v-.004Z" />
      <path d="M14.593.115c-2.802-.533-5.404.897-7.47 2.032-1.929 1.06-3.785 2.535-5.015 4.491C.73 8.828.183 11.415.019 13.848c-.097 1.441.193 3.26.485 4.8s.604 2.768.604 2.768l2.11-.529s-.296-1.173-.574-2.641c-.279-1.47-.518-3.266-.451-4.255.149-2.207.66-4.451 1.76-6.201.965-1.532 2.534-2.818 4.225-3.747 2.024-1.111 4.22-2.138 6.007-1.799 1.61.306 3.228 1.781 4.305 3.374 1.12 1.659 1.643 3.888 1.646 6.003.002 1.411-.947 3.01-1.417 5.024-.288 1.237-.689 3.556-.689 3.556l2.148.369s.414-2.363.664-3.438h-.004c.357-1.532 1.478-3.282 1.476-5.511-.003-2.456-.575-5.08-2.017-7.214-1.272-1.883-3.18-3.813-5.704-4.292ZM1.763 29.73S.493 36.792.593 40.673c.055 2.148-.225 4.862 1.23 7.158h-.005c1.377 2.174 3.73 3.861 6.313 4.322 2.44.436 4.946-.409 6.866-1.701 2.186-1.472 3.754-3.789 4.565-6.206.848-2.532.229-5.062.148-7.184-.085-2.29-.582-6.595-.582-6.595l-2.166.246s.498 4.363.575 6.43c.09 2.408.55 4.649-.043 6.417-.672 2.005-2.02 3.952-3.713 5.093-1.536 1.033-3.598 1.665-5.263 1.367-1.866-.333-3.819-1.712-4.853-3.344-.937-1.479-.835-3.745-.894-6.058-.085-3.309 1.14-10.515 1.14-10.515l-2.148-.373Z" />
      <path d="M11.505 6.786a1.092 1.092 0 0 0-.772.315c-.205.202-.32.477-.322.765l-.046 2.489a1.08 1.08 0 0 0 .652 1.015 1.094 1.094 0 0 0 1.434-.559c.058-.13.089-.27.092-.413l.046-2.493a1.08 1.08 0 0 0-.66-1.031 1.094 1.094 0 0 0-.424-.088ZM38.734 9.195a1.093 1.093 0 0 0-.787.36s-3.487 3.826-5.054 6.16c-1.085 1.615-2.325 3.362-2.93 5.477-.535 1.866-.706 3.891-.366 5.842.244 1.398.867 2.67 1.616 3.771.497.73 1.243 1.445 1.893 2.045.65.6 1.2 1.058 1.2 1.058a1.093 1.093 0 0 0 1.738-.516 1.082 1.082 0 0 0-.347-1.156s-.508-.417-1.11-.973c-.603-.557-1.304-1.281-1.57-1.672-.621-.914-1.098-1.933-1.272-2.93-.275-1.58-.142-3.302.31-4.88.473-1.65 1.55-3.23 2.65-4.869 1.13-1.682 3.313-4.102 4.114-5.003.888.878 3.614 3.556 5.169 5.388 1.249 1.473 2.525 2.793 3.216 4.263.597 1.271 1.002 2.648.957 3.907-.04 1.09-.543 2.283-1.14 3.484-.67 1.348-3.042 4.297-3.042 4.297a1.08 1.08 0 0 0 .526 1.725 1.094 1.094 0 0 0 1.159-.35s2.345-2.772 3.31-4.711c.626-1.26 1.3-2.713 1.36-4.368.064-1.76-.468-3.438-1.157-4.902-.902-1.92-2.35-3.355-3.526-4.742-1.974-2.327-6.13-6.396-6.13-6.396a1.09 1.09 0 0 0-.787-.313v.004Z" />
      <path d="M35.76.115c-2.524.48-4.431 2.409-5.704 4.292-1.442 2.134-2.013 4.758-2.016 7.214-.003 2.229 1.119 3.979 1.476 5.511h-.005c.25 1.075.664 3.438.664 3.438l2.148-.369s-.4-2.319-.689-3.556c-.47-2.013-1.418-3.613-1.416-5.024.002-2.115.525-4.344 1.646-6.003 1.076-1.593 2.694-3.068 4.305-3.374 1.787-.34 3.983.688 6.006 1.8 1.692.928 3.26 2.214 4.224 3.746 1.101 1.75 1.612 3.994 1.761 6.201.067.989-.172 2.786-.45 4.255-.279 1.468-.575 2.641-.575 2.641l2.11.53s.313-1.23.604-2.77c.292-1.539.582-3.357.485-4.8-.164-2.432-.71-5.018-2.088-7.209-1.23-1.956-3.087-3.432-5.016-4.491-2.066-1.135-4.668-2.565-7.47-2.032ZM48.59 29.73l-2.148.373s1.226 7.206 1.14 10.515c-.059 2.313.044 4.58-.893 6.058-1.035 1.633-2.987 3.01-4.854 3.344-1.665.297-3.727-.334-5.262-1.367-1.694-1.141-3.041-3.088-3.714-5.093-.592-1.768-.133-4.009-.042-6.417.076-2.068.574-6.43.574-6.43l-2.165-.246s-.498 4.31-.583 6.6c-.08 2.121-.7 4.652.149 7.183.81 2.417 2.378 4.734 4.564 6.206 1.92 1.292 4.426 2.137 6.866 1.702 2.584-.462 4.936-2.15 6.313-4.323h-.004c1.455-2.296 1.175-5.01 1.23-7.158.1-3.881-1.17-10.942-1.17-10.942v-.005Z" />
      <path d="M38.815 6.786c-.288.01-.56.133-.758.343a1.08 1.08 0 0 0-.293.775l.047 2.493c.006.288.126.561.334.76a1.092 1.092 0 0 0 1.844-.803l-.047-2.489a1.08 1.08 0 0 0-.7-1.009 1.093 1.093 0 0 0-.427-.07ZM5.609 35.12a.546.546 0 0 0-.332.132l-3.85 3.255a.541.541 0 0 0 .31.953.547.547 0 0 0 .396-.128l3.85-3.255a.542.542 0 0 0-.374-.958ZM6.383 36.842a.546.546 0 0 0-.374.165l-4.812 4.885a.543.543 0 0 0 .002.773.545.545 0 0 0 .777-.015l4.811-4.886a.542.542 0 0 0-.404-.922ZM7.127 39.14a.545.545 0 0 0-.361.183L1.759 44.88a.54.54 0 0 0 .436.903.546.546 0 0 0 .376-.18l5.003-5.557a.54.54 0 0 0-.447-.906ZM7.893 41.44a.545.545 0 0 0-.362.19l-4.717 5.364a.54.54 0 0 0 .445.908.547.547 0 0 0 .376-.197l4.713-5.364a.54.54 0 0 0-.455-.902ZM8.774 42.972a.547.547 0 0 0-.404.22l-4.042 5.363a.542.542 0 0 0 .513.864.548.548 0 0 0 .36-.212l4.04-5.363a.54.54 0 0 0-.467-.872ZM9.829 45.173a.546.546 0 0 0-.4.224l-3.276 4.407a.542.542 0 0 0 .72.788.544.544 0 0 0 .156-.144l3.272-4.407a.54.54 0 0 0-.472-.868ZM10.794 47.281a.546.546 0 0 0-.46.313l-1.25 2.587a.54.54 0 0 0 .255.724.548.548 0 0 0 .728-.254l1.25-2.587a.54.54 0 0 0-.523-.783ZM7.11 5.567a.546.546 0 0 0-.374.165L1.223 11.15a.541.541 0 0 0 .588.891.546.546 0 0 0 .178-.12l5.508-5.419a.54.54 0 0 0-.387-.935ZM7.072 8.277a.547.547 0 0 0-.421.177L.934 14.55a.541.541 0 0 0 .415.912.546.546 0 0 0 .38-.171l5.717-6.096a.54.54 0 0 0-.374-.918ZM7.055 11.324a.546.546 0 0 0-.379.156l-4.968 4.674a.543.543 0 0 0-.052.791.544.544 0 0 0 .796-.004l4.969-4.673a.541.541 0 0 0-.366-.944ZM35.42 35.12a.545.545 0 0 0-.332.132l-3.85 3.255a.542.542 0 0 0 .31.953.546.546 0 0 0 .397-.128l3.85-3.255a.542.542 0 0 0-.375-.958ZM36.194 36.842a.546.546 0 0 0-.374.165l-4.811 4.885a.542.542 0 1 0 .778.758l4.812-4.886a.541.541 0 0 0-.405-.922ZM36.939 39.14a.545.545 0 0 0-.362.183L31.57 44.88a.542.542 0 0 0 .437.904.546.546 0 0 0 .376-.18l5.002-5.558a.54.54 0 0 0-.446-.906ZM37.705 41.44a.545.545 0 0 0-.362.19l-4.718 5.364a.54.54 0 0 0 .446.908.546.546 0 0 0 .375-.197l4.714-5.364a.54.54 0 0 0-.455-.902ZM38.585 42.972a.548.548 0 0 0-.404.22l-4.041 5.363a.542.542 0 0 0 .513.864.548.548 0 0 0 .359-.212l4.041-5.363a.541.541 0 0 0-.468-.872ZM39.64 45.173a.546.546 0 0 0-.4.224l-3.275 4.407a.54.54 0 0 0 .518.861.545.545 0 0 0 .358-.217l3.271-4.407a.54.54 0 0 0-.172-.802.547.547 0 0 0-.3-.066ZM40.606 47.281a.546.546 0 0 0-.46.313l-1.25 2.587a.541.541 0 0 0 .672.747.544.544 0 0 0 .31-.277l1.251-2.587a.54.54 0 0 0-.523-.783Z" />
    </g>
  </svg>
);

const Coconut = () => (
  <svg
    width="56"
    height="64"
    viewBox="0 0 56 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="coco">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.6118 14.2202C24.6055 14.1877 21.5953 14.3979 18.6403 14.889C15.0707 15.4809 11.2538 16.3962 8.11611 18.5931C5.61145 20.3469 3.80516 22.9081 2.4669 25.4847C1.08398 28.1472 0.165944 31.1532 0.0336564 34.1967C-0.155072 38.5046 0.422381 43.1153 2.4669 47.0656C5.6638 53.2425 10.651 59.1929 17.1344 62.1824C21.9813 64.4174 27.7665 64.3821 32.8144 63.2026C38.8392 61.7949 44.7681 58.5848 48.9027 53.9234C52.4904 49.8784 54.3629 44.4652 55.1517 39.2807C55.7896 35.0881 55.5669 30.5079 53.85 26.5049C52.46 23.2642 49.9333 20.5141 47.0608 18.5804C43.8953 16.4498 40.0959 15.6171 36.5578 15.0245C33.6182 14.5321 30.6181 14.2533 27.6118 14.2202ZM27.5863 16.3876C30.4735 16.4201 33.3635 16.6878 36.1962 17.1623C39.6482 17.7405 43.1339 18.554 45.8399 20.3753C48.4054 22.1025 50.659 24.5874 51.8464 27.3558C53.3516 30.8653 53.5901 35.0753 52.9992 38.959C52.2539 43.8576 50.463 48.8917 47.2692 52.4926C43.4932 56.7498 37.9298 59.7827 32.3167 61.0944C27.6267 62.1903 22.2778 62.168 18.049 60.2182C12.1871 57.5152 7.4355 51.9353 4.40243 46.075C2.60015 42.5927 2.03448 38.334 2.21166 34.2898C2.32766 31.6209 3.14691 28.8966 4.40243 26.4795C5.64119 24.0943 7.28573 21.8272 9.37101 20.3668C12.0547 18.4879 15.5462 17.5992 18.9976 17.0268C21.8165 16.5595 24.6991 16.3559 27.5863 16.3876Z"
        fill="#1188EE"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.6325 25.0232C3.41626 25.0356 3.20866 25.112 3.03624 25.2425C2.86382 25.373 2.73441 25.5515 2.66454 25.7555C2.59467 25.9595 2.58752 26.1798 2.64401 26.3878C2.7005 26.5959 2.81805 26.7826 2.98165 26.9239C2.98165 26.9239 4.00148 27.8303 5.32981 28.8542C6.65814 29.8779 8.25513 31.0301 9.7071 31.5973C15.8585 33.9999 22.6284 34.3007 29.0369 34.2431C42.5945 34.1217 53.0801 28.4521 53.0801 28.4521C53.2095 28.3863 53.3244 28.2954 53.418 28.1848C53.5116 28.0742 53.582 27.9462 53.6251 27.8081C53.6682 27.67 53.6831 27.5247 53.6689 27.3808C53.6547 27.2369 53.6117 27.0973 53.5424 26.9702C53.4731 26.8431 53.379 26.7309 53.2656 26.6405C53.1521 26.5501 53.0217 26.4833 52.8819 26.4439C52.742 26.4045 52.5957 26.3934 52.4515 26.4111C52.3073 26.4288 52.1681 26.475 52.0421 26.5471C52.0421 26.5471 41.9736 31.9591 29.0156 32.0757C22.6933 32.132 16.2026 31.8044 10.5026 29.5781C9.5289 29.1979 7.92975 28.1142 6.66555 27.1398C5.40134 26.1655 4.43224 25.3068 4.43224 25.3068C4.3248 25.2087 4.19865 25.133 4.06127 25.0843C3.92389 25.0356 3.77809 25.0147 3.6325 25.0232Z"
        fill="#1188EE"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M53.7691 32.7445C53.4868 32.7557 53.2199 32.8756 53.0247 33.079C53.0247 33.079 52.5337 33.5752 51.8932 34.1584C51.2527 34.7419 50.4326 35.4171 49.9832 35.6739C47.3325 37.1892 44.2865 38.1398 41.2073 38.7345C38.5764 39.243 32.4613 39.1198 32.4613 39.1198C32.3182 39.1158 32.1758 39.1398 32.0421 39.1907C31.9084 39.2415 31.7861 39.3182 31.6822 39.4161C31.5782 39.514 31.4947 39.6313 31.4363 39.7613C31.3779 39.8914 31.3459 40.0315 31.342 40.1738C31.3381 40.3162 31.3624 40.458 31.4135 40.5911C31.4647 40.7241 31.5416 40.8456 31.6401 40.949C31.7385 41.0524 31.8564 41.1355 31.9871 41.1935C32.1178 41.2515 32.2587 41.2833 32.4017 41.2872C32.4017 41.2872 38.3693 41.493 41.6242 40.8638C44.8652 40.2379 48.1359 39.2295 51.0679 37.5535C51.8616 37.0996 52.678 36.3885 53.365 35.7628C54.052 35.1371 54.5774 34.6027 54.5774 34.6027C54.7336 34.4491 54.8396 34.2521 54.8813 34.0375C54.923 33.8229 54.8985 33.6009 54.8111 33.4004C54.7237 33.1999 54.5774 33.0304 54.3915 32.9141C54.2055 32.7978 53.9886 32.7402 53.7692 32.7488L53.7691 32.7445Z"
        fill="#1188EE"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M52.8844 42.1169C52.7132 42.1221 52.5456 42.1674 52.3952 42.2492C52.3952 42.2492 46.7102 45.155 43.9724 45.9363C42.1375 46.46 37.6554 46.8464 37.6554 46.8464C37.3671 46.8689 37.0996 47.0042 36.9117 47.2229C36.7238 47.4417 36.631 47.7258 36.6535 48.0127C36.6761 48.2996 36.8122 48.5657 37.032 48.7527C37.2518 48.9397 37.5373 49.0321 37.8255 49.0096C37.8255 49.0096 42.1758 48.7029 44.5723 48.019C47.8715 47.0773 53.4034 44.1711 53.4034 44.1711C53.6255 44.0608 53.8032 43.8786 53.9069 43.6541C54.0105 43.4296 54.0341 43.1764 53.9735 42.9368C53.9129 42.6972 53.7719 42.4854 53.5739 42.3365C53.3758 42.1876 53.1325 42.1094 52.8844 42.1169Z"
        fill="#1188EE"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28.1988 18.868C26.1972 18.8897 23.6362 18.9309 21.1969 19.1136C18.7561 19.2956 16.4678 19.5889 14.816 20.2311C11.6689 21.4553 10.1452 23.7659 10.1452 23.7659C10.0666 23.8862 10.0128 24.021 9.98698 24.1622C9.96112 24.3034 9.9637 24.4482 9.99457 24.5884C10.0254 24.7286 10.084 24.8612 10.1668 24.9787C10.2496 25.0962 10.3551 25.1963 10.477 25.2729C10.477 25.2729 15.3798 28.4 19.8867 29.3452C24.3069 30.2727 31.5879 30.3099 36.0473 29.4124C40.5969 28.4973 45.6612 25.344 45.6612 25.344C45.8079 25.2539 45.9309 25.1307 46.0203 24.984C46.1097 24.8373 46.1628 24.6714 46.1752 24.5003C46.1877 24.3292 46.1591 24.1577 46.092 23.9997C46.0248 23.8418 45.9209 23.7017 45.7888 23.5915C45.7888 23.5915 42.5774 20.8203 39.3654 19.7986C36.2441 18.8059 32.1968 18.8324 28.2031 18.8672L28.1988 18.868ZM28.2202 21.0354C32.1987 21.0008 36.1379 21.0571 38.7019 21.8651C40.5288 22.4462 41.8584 23.5854 42.9005 24.367C41.2469 25.2751 38.4458 26.7192 35.6178 27.2879C31.6522 28.0855 24.2666 28.0485 20.3377 27.2249C17.3948 26.6076 14.4943 25.0377 12.9997 24.1857C13.4682 23.63 13.7979 22.9549 15.6073 22.2512C16.7907 21.791 19.0049 21.4537 21.3586 21.2775C23.7123 21.102 26.2355 21.0528 28.2202 21.0354Z"
        fill="#1188EE"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.815 9.61024L15.7349 10.2495L21.3841 28.5369L23.4642 27.8977L17.815 9.61024Z"
        fill="#1188EE"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M46.9118 4.43698C46.7773 4.44084 46.6446 4.4695 46.5205 4.52151L37.2639 8.24673C37.0923 8.31613 36.9412 8.42792 36.8251 8.57163C36.709 8.71533 36.6316 8.88621 36.6003 9.06797L33.261 28.2359C33.2367 28.3763 33.2404 28.52 33.272 28.659C33.3035 28.7979 33.3622 28.9294 33.4448 29.0458C33.6115 29.2808 33.8652 29.4401 34.1501 29.4889C34.2912 29.5131 34.4356 29.5095 34.5752 29.4781C34.7148 29.4467 34.8469 29.3883 34.9638 29.3061C35.1999 29.1402 35.3602 28.8877 35.4092 28.6042L38.6422 10.0289L47.3372 6.53228C47.5778 6.44066 47.778 6.26717 47.9022 6.04255C48.0264 5.81794 48.0666 5.55674 48.0156 5.30545C47.9645 5.05415 47.8257 4.82897 47.6236 4.66994C47.4215 4.51091 47.1693 4.42847 46.9118 4.43698Z"
        fill="#1188EE"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.4456 2.81579C15.2919 2.8215 15.1412 2.8596 15.0033 2.92744C14.8655 2.99528 14.7436 3.09141 14.6458 3.20948L7.63536 11.6082C7.48897 11.7846 7.40242 12.0024 7.38811 12.2307C7.37381 12.459 7.43247 12.6861 7.5557 12.8792C7.67893 13.0723 7.86041 13.2217 8.07416 13.3059C8.2879 13.3902 8.52295 13.4048 8.74563 13.348L26.1016 8.87774C26.3251 8.82003 26.5244 8.69332 26.6707 8.51554C26.817 8.33775 26.9028 8.1182 26.9155 7.88876C26.9283 7.65932 26.8675 7.43175 26.7418 7.23896C26.6162 7.04618 26.4322 6.89811 26.2165 6.81617L15.8709 2.88776C15.7354 2.83593 15.5907 2.81117 15.4456 2.81579ZM15.8242 5.18626L22.2518 7.62895L11.4681 10.4059L15.8242 5.18626Z"
        fill="#1188EE"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.6162 0.00084492C14.4454 0.00755437 14.2786 0.0540944 14.1293 0.136837C13.9799 0.219579 13.8523 0.336146 13.7566 0.47708C13.661 0.618015 13.6 0.779417 13.5786 0.948157C13.5572 1.1169 13.576 1.28831 13.6335 1.44847L14.5183 4.04752C14.5623 4.18461 14.6332 4.31159 14.727 4.4211C14.8208 4.53062 14.9356 4.62051 15.0647 4.68542C15.1937 4.75032 15.3345 4.78898 15.4787 4.79918C15.6229 4.80938 15.7678 4.7909 15.9048 4.74481C16.0417 4.69872 16.1681 4.62599 16.2765 4.53077C16.385 4.43556 16.4732 4.31979 16.5362 4.19026C16.5992 4.06074 16.6357 3.92002 16.6434 3.77633C16.6512 3.63264 16.6301 3.48878 16.5815 3.35328L15.6967 0.754223C15.6242 0.528304 15.4793 0.332186 15.2841 0.196101C15.0889 0.0600174 14.8543 -0.00850945 14.6162 0.00084492Z"
        fill="#1188EE"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.64812 33.7734C7.54491 33.7811 7.44604 33.8181 7.36311 33.8797L1.00775 38.3796C0.949374 38.421 0.899766 38.4734 0.86176 38.5339C0.823753 38.5944 0.798092 38.6617 0.786242 38.732C0.774392 38.8024 0.776585 38.8744 0.792695 38.944C0.808806 39.0135 0.838518 39.0793 0.880137 39.1374C0.921755 39.1955 0.974464 39.2448 1.03525 39.2826C1.09604 39.3204 1.16372 39.346 1.23443 39.3578C1.30514 39.3695 1.37749 39.3674 1.44735 39.3514C1.51721 39.3354 1.58321 39.3058 1.64159 39.2644L7.99269 34.7602C8.09056 34.6928 8.16354 34.5953 8.20046 34.4827C8.23738 34.3701 8.23621 34.2485 8.19713 34.1366C8.15804 34.0247 8.0832 33.9289 7.98405 33.8633C7.8849 33.7978 7.76691 33.7658 7.64812 33.7734Z"
        fill="#1188EE"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.74113 36.1693C9.63804 36.1816 9.54062 36.2231 9.46037 36.2886L2.24147 41.9402C2.18082 41.9825 2.12947 42.0366 2.09056 42.0992C2.05165 42.1619 2.026 42.2319 2.01517 42.3048C2.00434 42.3777 2.00856 42.4519 2.02758 42.5231C2.0466 42.5943 2.08001 42.661 2.12578 42.7189C2.17155 42.7768 2.2287 42.825 2.29376 42.8602C2.35881 42.8954 2.43039 42.9169 2.50413 42.9237C2.57787 42.9304 2.65221 42.9222 2.72261 42.8993C2.79301 42.8765 2.858 42.8395 2.91359 42.7908L10.1325 37.1395C10.2272 37.0676 10.2956 36.9668 10.3272 36.8525C10.3587 36.7382 10.3518 36.6166 10.3074 36.5067C10.263 36.3967 10.1835 36.3042 10.0813 36.2434C9.97898 36.1826 9.8595 36.156 9.74113 36.1693Z"
        fill="#1188EE"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.6593 38.18C12.5367 38.1863 12.4197 38.2336 12.3275 38.3144L3.5687 45.786C3.51291 45.8319 3.46687 45.8886 3.4333 45.9524C3.39972 46.0163 3.37928 46.0862 3.37317 46.158C3.36706 46.2298 3.37541 46.3019 3.39771 46.3704C3.42002 46.439 3.45584 46.5026 3.50309 46.5572C3.55033 46.6118 3.60804 46.6566 3.67285 46.6887C3.73766 46.7209 3.80826 46.7396 3.88052 46.7443C3.95278 46.749 4.02525 46.7393 4.09369 46.7157C4.16213 46.6922 4.22517 46.6553 4.27911 46.6072L13.0379 39.1367C13.1256 39.0637 13.1879 38.9651 13.2161 38.8549C13.2443 38.7447 13.237 38.6284 13.1951 38.5226C13.1532 38.4168 13.0789 38.3267 12.9828 38.2652C12.8866 38.2037 12.7735 38.1739 12.6593 38.18Z"
        fill="#1188EE"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.8713 41.1476C14.7481 41.1551 14.6311 41.2039 14.5395 41.2862L5.49142 49.1388C5.43488 49.1847 5.38818 49.2413 5.3541 49.3055C5.32002 49.3697 5.29926 49.4403 5.29305 49.5126C5.28685 49.585 5.29532 49.6577 5.31796 49.7267C5.34061 49.7957 5.37696 49.8595 5.42487 49.9143C5.47278 49.9691 5.53127 50.0139 5.59685 50.0458C5.66244 50.0776 5.73379 50.0959 5.80666 50.0997C5.87953 50.1036 5.95244 50.093 6.02106 50.0683C6.08967 50.0435 6.15259 50.0052 6.20608 49.9558L15.2542 42.1032C15.3422 42.03 15.4048 41.9308 15.4329 41.8201C15.461 41.7094 15.4533 41.5928 15.4109 41.4868C15.3684 41.3807 15.2934 41.2907 15.1965 41.2296C15.0996 41.1685 14.9858 41.1405 14.8713 41.1476Z"
        fill="#1188EE"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.2918 43.8314C17.1685 43.8349 17.05 43.8799 16.9558 43.9592L7.04413 52.0999C6.93245 52.1914 6.86186 52.3233 6.8479 52.4666C6.83395 52.6099 6.87776 52.7526 6.96971 52.8637C7.06166 52.9749 7.19421 53.0453 7.3382 53.0592C7.48219 53.0731 7.62583 53.0293 7.73752 52.9378L17.6492 44.7973C17.7386 44.7263 17.8032 44.6292 17.834 44.5195C17.8647 44.4099 17.86 44.2933 17.8204 44.1864C17.7809 44.0796 17.7085 43.9878 17.6136 43.9242C17.5188 43.8607 17.4062 43.8277 17.2918 43.8314Z"
        fill="#1188EE"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.5889 47.1841C19.4847 47.1898 19.3843 47.2251 19.2996 47.286L9.09448 54.4697C9.03609 54.5108 8.98642 54.5629 8.9483 54.6232C8.91017 54.6834 8.88435 54.7506 8.87229 54.8208C8.86024 54.891 8.8622 54.9628 8.87805 55.0322C8.8939 55.1016 8.92334 55.1672 8.96468 55.2253C9.00602 55.2834 9.05846 55.3329 9.119 55.3709C9.17954 55.4088 9.24699 55.4343 9.31751 55.4463C9.38802 55.4582 9.46022 55.4565 9.52998 55.4407C9.59974 55.4249 9.66569 55.3956 9.72406 55.3545L19.9292 48.1707C20.0267 48.1035 20.0994 48.0064 20.1363 47.8942C20.1733 47.7821 20.1724 47.6611 20.1339 47.5495C20.0954 47.4379 20.0214 47.3418 19.923 47.2759C19.8246 47.21 19.7073 47.1776 19.5889 47.1841Z"
        fill="#1188EE"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.5113 49.0975C22.3881 49.0964 22.2681 49.1368 22.171 49.2123L12.6422 56.3963C12.5272 56.4833 12.4516 56.6121 12.432 56.7546C12.4125 56.897 12.4506 57.0414 12.5381 57.1559C12.6255 57.2704 12.7551 57.3458 12.8983 57.3652C13.0415 57.3846 13.1865 57.3466 13.3016 57.2596L22.8304 50.0761C22.9223 50.0086 22.9906 49.914 23.0256 49.8058C23.0605 49.6975 23.0603 49.5808 23.025 49.4727C22.9897 49.3645 22.9211 49.27 22.8289 49.2028C22.7367 49.1356 22.6256 49.0984 22.5113 49.0975Z"
        fill="#1188EE"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25.4083 51.1083C25.2851 51.1072 25.1651 51.1476 25.068 51.2232L14.765 58.7879C14.7062 58.8296 14.6562 58.8826 14.6182 58.9437C14.5801 59.0049 14.5546 59.0727 14.5432 59.1437C14.5319 59.2148 14.5348 59.2874 14.5519 59.3573C14.569 59.4271 14.5999 59.4931 14.6428 59.5509C14.6858 59.6088 14.7398 59.6575 14.8019 59.6943C14.8639 59.7312 14.9328 59.7556 15.0043 59.7658C15.0759 59.7759 15.1487 59.7715 15.2187 59.7533C15.2886 59.7351 15.3542 59.7033 15.4116 59.6597L25.7146 52.091C25.8076 52.0247 25.8772 51.9308 25.9136 51.8229C25.95 51.7151 25.9514 51.5985 25.9175 51.4898C25.8836 51.3811 25.8162 51.2858 25.7248 51.2173C25.6334 51.1489 25.5227 51.1106 25.4083 51.1083Z"
        fill="#1188EE"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28.3052 53.4069C28.1629 53.401 28.0239 53.4507 27.9181 53.5455L19.5464 60.8269C19.4898 60.8728 19.4431 60.9294 19.4091 60.9936C19.375 61.0578 19.3542 61.1284 19.348 61.2008C19.3418 61.2731 19.3503 61.3458 19.3729 61.4148C19.3956 61.4838 19.4319 61.5476 19.4798 61.6024C19.5277 61.6572 19.5862 61.702 19.6518 61.7339C19.7174 61.7657 19.7887 61.784 19.8616 61.7878C19.9345 61.7917 20.0074 61.7811 20.076 61.7564C20.1446 61.7316 20.2076 61.6933 20.261 61.6439L28.637 54.3628C28.7214 54.2923 28.7823 54.1978 28.8117 54.0921C28.8412 53.9865 28.8376 53.8746 28.8017 53.771C28.7657 53.6673 28.699 53.5768 28.6104 53.5117C28.5218 53.4465 28.4153 53.4106 28.3052 53.4069Z"
        fill="#1188EE"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31.8147 55.9934C31.6734 56.0012 31.5407 56.0633 31.4447 56.1667L25.285 62.5845C25.2355 62.636 25.1968 62.6965 25.1709 62.7629C25.145 62.8292 25.1324 62.8999 25.134 62.9711C25.1356 63.0422 25.1513 63.1123 25.1801 63.1775C25.2089 63.2426 25.2503 63.3016 25.302 63.3508C25.3537 63.4 25.4146 63.4385 25.4812 63.4643C25.5479 63.49 25.619 63.5023 25.6905 63.5008C25.762 63.4992 25.8325 63.4837 25.8979 63.455C25.9634 63.4263 26.0225 63.3852 26.072 63.3338L32.2316 56.916C32.3092 56.8382 32.3613 56.7389 32.381 56.6311C32.4007 56.5232 32.3871 56.412 32.3419 56.312C32.2967 56.212 32.2222 56.1282 32.1281 56.0712C32.034 56.0143 31.9247 55.9873 31.8147 55.9934Z"
        fill="#1188EE"
      />
    </g>
  </svg>
);

const Floater = () => (
  <svg
    width="60"
    height="61"
    viewBox="0 0 60 61"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="boia">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30.7412 13.7432C28.03 13.5352 25.221 14.1241 22.8119 15.3476C19.9586 16.797 17.3181 19.037 15.6908 21.8752C14.0578 24.7238 13.2716 28.1861 13.649 31.4719C14.1002 35.4001 15.7425 39.5293 18.7537 42.3047C21.9924 45.2898 26.6537 47.2349 31.1411 46.9273C35.6956 46.6152 40.0608 43.9826 42.9244 40.5817C45.3523 37.6985 46.4236 33.7773 46.4467 30.1384C46.4617 26.0219 45.5205 21.3024 42.4693 18.1413C39.4317 14.9944 34.7626 14.0557 30.7412 13.7475V13.7432ZM30.5711 15.9064C34.3652 16.1973 38.5027 17.1612 40.8953 19.6401C43.3313 22.1636 44.2824 26.3603 44.2687 30.1257C44.2482 33.3406 43.2526 36.819 41.2569 39.189C38.7479 42.1688 34.7791 44.5043 30.9879 44.7642C27.2524 45.0201 23.0423 43.3057 20.234 40.7172C17.7348 38.4137 16.2117 34.7239 15.8099 31.2264C15.4921 28.4586 16.1786 25.39 17.5796 22.9462C18.944 20.5662 21.2747 18.5602 23.7988 17.278C25.8441 16.2393 28.2959 15.7319 30.5711 15.9064Z"
        fill="#1188EE"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32.0769 0.057094C23.9609 -0.498844 15.3876 3.05611 9.48012 8.49824C4.03715 13.5125 0.99586 21.0864 0.168286 28.2885C-0.515978 34.2432 0.918315 40.59 3.89047 45.7716C6.83835 50.9105 11.6725 55.0178 16.899 57.6711C21.274 59.8921 26.4081 60.9641 31.3197 60.5878C38.7902 60.0156 47.3424 58.2392 52.7765 52.6125C58.2499 46.9456 60.0273 38.2927 59.9997 30.7014C59.9592 24.0408 57.9775 16.8594 53.5975 11.6604C48.3626 5.44672 40.3144 0.626067 32.0769 0.0614595V0.057094ZM31.9281 2.21616C39.4027 2.72853 47.0456 7.25634 51.9257 13.0489C55.8736 17.7348 57.7838 24.4738 57.8217 30.7099C57.8481 37.9501 56.0647 46.08 51.2068 51.1097C46.4179 56.0685 38.3929 57.874 31.1496 58.4289C26.6736 58.7718 21.9013 57.7771 17.8901 55.7408C12.9928 53.2548 8.46834 49.3769 5.78346 44.6964C3.04357 39.9196 1.70881 33.9705 2.33353 28.534C3.11158 21.7628 6.0296 14.6326 10.9605 10.0899C16.4375 5.04443 24.5637 1.71159 31.9281 2.21616Z"
        fill="#1188EE"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.4392 3.98135L15.559 5.07775L22.6375 17.1339L24.5177 16.0375L17.4392 3.98135Z"
        fill="#1188EE"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M43.9071 4.608L36.4202 15.8514L38.2324 17.0494L45.7193 5.80599L43.9071 4.608Z"
        fill="#1188EE"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M53.9166 14.4374L43.0265 20.9396L44.1496 22.798L55.0396 16.2958L53.9166 14.4374Z"
        fill="#1188EE"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M44.5537 35.7009L43.4392 37.5635L56.235 45.1494L57.3495 43.2868L44.5537 35.7009Z"
        fill="#1188EE"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M39.5766 42.6347L37.5262 43.367L42.4267 56.9133L44.4771 56.181L39.5766 42.6347Z"
        fill="#1188EE"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.4124 43.4053L14.6061 55.0551L16.4863 56.143L23.2926 44.4932L21.4124 43.4053Z"
        fill="#1188EE"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.3757 36.3654L4.26057 43.1385L5.32405 45.0307L17.4392 38.2576L16.3757 36.3654Z"
        fill="#1188EE"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.36659 15.0427L4.32863 16.9477L15.627 23.0435L16.665 21.1386L5.36659 15.0427Z"
        fill="#1188EE"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.06383 18.8823C6.94019 18.8778 6.81866 18.9154 6.71926 18.9887L2.15906 22.2398C2.04171 22.324 1.96278 22.4512 1.93964 22.5933C1.91649 22.7354 1.95103 22.8808 2.03564 22.9975C2.12026 23.1143 2.24802 23.1928 2.39083 23.2158C2.53364 23.2388 2.6798 23.2045 2.79715 23.1203L7.35735 19.8692C7.45146 19.8042 7.52257 19.7114 7.56057 19.6038C7.59857 19.4963 7.60152 19.3795 7.56901 19.2702C7.53649 19.1609 7.47017 19.0647 7.37948 18.995C7.28878 18.9254 7.17833 18.8859 7.06383 18.8823Z"
        fill="#1188EE"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.79978 20.5754C7.65773 20.573 7.52034 20.6258 7.41693 20.7228L1.35935 26.2768C1.30655 26.3251 1.26384 26.3834 1.23366 26.4482C1.20348 26.513 1.18642 26.583 1.18346 26.6543C1.18049 26.7257 1.19168 26.7968 1.21638 26.8638C1.24108 26.9309 1.27881 26.9925 1.32742 27.0451C1.37602 27.0976 1.43455 27.1402 1.49966 27.1702C1.56477 27.2002 1.63519 27.217 1.70689 27.22C1.77859 27.2229 1.85016 27.2118 1.91753 27.1872C1.9849 27.1626 2.04675 27.1249 2.09953 27.0766L8.15711 21.5226C8.23985 21.45 8.29847 21.3543 8.32518 21.2477C8.3519 21.1412 8.34545 21.0288 8.30671 20.926C8.26796 20.8232 8.19874 20.7345 8.10822 20.6717C8.01769 20.6089 7.91013 20.576 7.79978 20.5754Z"
        fill="#1188EE"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.64207 22.9463C8.52035 22.9547 8.405 23.0035 8.31452 23.0849L0.487302 29.926C0.430399 29.9718 0.383354 30.0284 0.348976 30.0927C0.314599 30.157 0.293594 30.2276 0.287217 30.3001C0.280841 30.3727 0.289222 30.4457 0.311862 30.515C0.334501 30.5842 0.370935 30.6482 0.418985 30.7031C0.467035 30.758 0.525717 30.8027 0.591525 30.8346C0.657333 30.8664 0.728916 30.8849 0.802 30.8886C0.875084 30.8923 0.948168 30.8813 1.01689 30.8563C1.08561 30.8313 1.14855 30.7926 1.20196 30.7428L9.03343 23.9022C9.12228 23.8286 9.18528 23.7286 9.21332 23.617C9.24136 23.5054 9.23297 23.3878 9.18939 23.2812C9.1458 23.1747 9.06927 23.0847 8.97087 23.0243C8.87247 22.9639 8.75731 22.9372 8.64207 22.9463Z"
        fill="#1188EE"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.09729 25.5875C8.95584 25.5839 8.81853 25.635 8.71443 25.7304L1.02334 32.639C0.916194 32.7356 0.851974 32.8708 0.844808 33.0144C0.837642 33.1581 0.888117 33.2986 0.98513 33.4052C1.08214 33.5119 1.21775 33.5758 1.36213 33.583C1.50651 33.5902 1.64783 33.5398 1.75502 33.4433L9.44611 26.5347C9.52835 26.4626 9.58678 26.3674 9.61376 26.2617C9.64073 26.1559 9.635 26.0445 9.59731 25.9421C9.55962 25.8396 9.49172 25.751 9.40251 25.6875C9.31329 25.6241 9.20691 25.5898 9.09729 25.5875Z"
        fill="#1188EE"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.87142 28.2291C9.75023 28.2364 9.63494 28.2837 9.54387 28.3635L1.24021 35.4753C1.18441 35.5213 1.13838 35.5776 1.10481 35.6415C1.07123 35.7053 1.05079 35.7753 1.04468 35.8471C1.03857 35.9189 1.04692 35.9912 1.06922 36.0598C1.09153 36.1283 1.12735 36.1917 1.1746 36.2463C1.22184 36.3009 1.27955 36.3456 1.34436 36.3778C1.40917 36.4099 1.47977 36.429 1.55203 36.4336C1.62429 36.4383 1.69676 36.4286 1.7652 36.405C1.83364 36.3815 1.89668 36.3447 1.95062 36.2966L10.2543 29.1848C10.3423 29.1116 10.4048 29.0126 10.433 28.902C10.4611 28.7913 10.4534 28.6747 10.411 28.5686C10.3685 28.4625 10.2935 28.3723 10.1966 28.3112C10.0997 28.25 9.98592 28.2221 9.87142 28.2291Z"
        fill="#1188EE"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.8243 31.2772C10.7016 31.2834 10.5847 31.3308 10.4925 31.4116L2.12079 38.5911C2.01138 38.6854 1.9441 38.8191 1.93374 38.9628C1.92339 39.1065 1.9708 39.2481 2.06556 39.357C2.16032 39.4659 2.29466 39.533 2.43904 39.5433C2.58342 39.5536 2.72601 39.5066 2.83545 39.4123L11.2072 32.2328C11.2952 32.1596 11.3577 32.0604 11.3859 31.9497C11.414 31.839 11.4063 31.7224 11.3639 31.6163C11.3214 31.5103 11.2464 31.4203 11.1495 31.3592C11.0526 31.2981 10.9388 31.2701 10.8243 31.2772Z"
        fill="#1188EE"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.4455 34.6637C11.3231 34.6694 11.2062 34.7158 11.1137 34.7957L3.15034 41.4334C3.09531 41.479 3.04984 41.5352 3.01653 41.5982C2.98323 41.6613 2.96273 41.7302 2.95621 41.8012C2.9497 41.8721 2.95729 41.9435 2.97855 42.0115C2.99982 42.0795 3.03435 42.1427 3.08016 42.1975C3.12597 42.2523 3.18217 42.2977 3.24555 42.3308C3.30893 42.364 3.37826 42.3842 3.44956 42.3906C3.52086 42.3971 3.59274 42.3896 3.6611 42.3684C3.72946 42.3472 3.79296 42.3129 3.84798 42.2673L11.8113 35.6297C11.9014 35.5583 11.9665 35.4603 11.9971 35.3498C12.0277 35.2392 12.0222 35.1218 11.9816 35.0145C11.9409 34.9073 11.8671 34.8155 11.7708 34.7526C11.6744 34.6897 11.5606 34.6581 11.4455 34.6637Z"
        fill="#1188EE"
      />
    </g>
  </svg>
);

export const Info = () => {
  const howToArriveInfo = [
    {
      transportationMode: "Carro",
      directions: "pela via Lúcio Costa sentido Barra",
    },
    { transportationMode: "Ônibus", directions: "linhas 2333, 138, 189 e 170" },
    { transportationMode: "Metrô", directions: "linha azul sentido Zona Sul" },
  ];

  return (
    <section className="py-16">
      <Container className="grid grid-cols-2 gap-32">
        <div>
          <img
            src="/src/images/boards.jpg"
            alt="pranchas de surf"
            className="h-3/4 rounded-sm bg-cover bg-[55%] object-cover shadow-xl"
          />
          <img
            src="/src/images/map-info.jpg"
            alt="pranchas de surf"
            className="mx-auto -mt-32 mb-11 h-60 w-[95%] rounded-sm bg-cover bg-[55%] object-cover shadow-xl"
          />
          <h3 className="flex items-center gap-1 pl-3 font-bold uppercase text-surf-darkGray-300">
            <Ellipsis className="text-surf-red-100" />
            Como chegar
          </h3>
          <ul className="pl-3">
            {howToArriveInfo.map((item) => (
              <HowToArriveListItem key={item.transportationMode} {...item} />
            ))}
          </ul>
        </div>
        <div className="mb-8">
          <h2 className="mb-16 font-serif text-7xl text-surf-darkGray-300">
            <span className="text-surf-blue-200">Aulas</span> em uma das
            melhores praias do <span className="text-surf-blue-200">Rio.</span>
          </h2>
          <ul className="mb-8 mt-16 grid text-2xl">
            <li className="grid grid-cols-[60px_auto] items-center gap-8 border-t-2 border-surf-lightGray-100 py-8 text-surf-darkGray-200">
              {" "}
              <FlipFlops />
              8km de costa
            </li>
            <li className="grid grid-cols-[60px_auto] items-center gap-8 border-t-2 border-surf-lightGray-100 py-8 text-surf-darkGray-200">
              {" "}
              <Coconut /> Restaurantes à beira mar
            </li>
            <li className="last-of-type: grid grid-cols-[60px_auto] items-center gap-8 border-t-2 border-surf-lightGray-100 py-8 text-surf-darkGray-200 last-of-type:border-b-2">
              <Floater /> Salva-vidas a cada 300m
            </li>
          </ul>
          <p className="mb-8 text-surf-darkGray-200">
            Como cidade capital, abriga na zona chamada Plateau, promontório à
            beira-mar, edifícios públicos e outras construções de importância,
            como o Palácio Presidencial, construído no fim do século XIX para
            ser a residência do governador português.
          </p>
          <p className="text-surf-darkGray-200">
            Como cidade capital, abriga na zona chamada Plateau, promontório à
            beira-mar, edifícios públicos e outras construções de importância,
            como o Palácio Presidencial, construído no fim do século XIX para
            ser a residência do governador português.
          </p>
        </div>
      </Container>
    </section>
  );
};