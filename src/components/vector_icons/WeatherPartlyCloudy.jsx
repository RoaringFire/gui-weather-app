function WeatherPartlyCloudy({size}) {
    return (  
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 44 35" fill="none">
            <circle cx="29.6487" cy="12.6487" r="12.6487" fill="url(#paint0_radial_19_415)"/>
            <circle cx="29.5337" cy="12.5337" r="10.4639" fill="#FFF700"/>
            <g filter="url(#filter0_d_19_415)">
            <path d="M22.833 16C26.2611 16 29.2049 17.0567 30.4844 18.5654C30.7094 18.5561 30.9373 18.5498 31.167 18.5498C35.7691 18.5499 39.4998 20.4527 39.5 22.7998C39.5 23.1747 39.4033 23.5375 39.2246 23.8838C40.9279 24.6619 41.9999 25.7918 42 27.0498C42 29.397 38.2692 31.2997 33.667 31.2998C32.369 31.2998 31.1402 31.1479 30.0449 30.8779C28.6027 32.1457 25.9137 33 22.833 33C19.4458 32.9999 16.5317 31.9683 15.2285 30.4883C13.854 30.998 12.1625 31.2998 10.333 31.2998C5.73078 31.2997 2 29.397 2 27.0498C2.00014 25.4619 3.70762 24.0772 6.2373 23.3477C6.192 23.1682 6.16699 22.9855 6.16699 22.7998C6.1672 20.4527 9.89775 18.5498 14.5 18.5498C14.7295 18.5498 14.9568 18.5561 15.1816 18.5654C16.4609 17.0566 19.4048 16.0001 22.833 16Z" fill="#D9D9D9"/>
            </g>
            <defs>
            <filter id="filter0_d_19_415" x="0" y="14" width="44" height="21" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset/>
                <feGaussianBlur stdDeviation="1"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_19_415"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_19_415" result="shape"/>
            </filter>
            <radialGradient id="paint0_radial_19_415" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(29.6487 12.6487) rotate(90) scale(12.6487)">
                <stop offset="0.764423" stop-color="#FFFB7B"/>
                <stop offset="0.764523" stop-color="#FFFB7B"/>
                <stop offset="1" stop-color="#FFF700" stop-opacity="0"/>
            </radialGradient>
            </defs>
      </svg>
    );
}

export default WeatherPartlyCloudy;