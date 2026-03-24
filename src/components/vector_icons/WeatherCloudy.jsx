function WeatherCloudy({size}) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 54 31" fill="none">
            <g filter="url(#filter0_d_120_58)">
                <path d="M32.833 2C36.2611 2 39.2049 3.05671 40.4844 4.56543C40.7094 4.55613 40.9373 4.5498 41.167 4.5498C45.7691 4.54989 49.4998 6.45274 49.5 8.7998C49.5 9.17465 49.4033 9.53755 49.2246 9.88379C50.9279 10.6619 51.9999 11.7918 52 13.0498C52 15.397 48.2692 17.2997 43.667 17.2998C42.369 17.2998 41.1402 17.1479 40.0449 16.8779C38.6027 18.1457 35.9137 19 32.833 19C29.4458 18.9999 26.5317 17.9683 25.2285 16.4883C23.854 16.998 22.1625 17.2998 20.333 17.2998C15.7308 17.2997 12 15.397 12 13.0498C12.0001 11.4619 13.7076 10.0772 16.2373 9.34766C16.192 9.1682 16.167 8.98555 16.167 8.7998C16.1672 6.45268 19.8978 4.5498 24.5 4.5498C24.7295 4.5498 24.9568 4.55615 25.1816 4.56543C26.4609 3.05659 29.4048 2.00007 32.833 2Z" fill="#D9D9D9"/>
            </g>
            <g filter="url(#filter1_d_120_58)">
                <path d="M22.833 12C26.2611 12 29.2049 13.0567 30.4844 14.5654C30.7094 14.5561 30.9373 14.5498 31.167 14.5498C35.7691 14.5499 39.4998 16.4527 39.5 18.7998C39.5 19.1747 39.4033 19.5375 39.2246 19.8838C40.9279 20.6619 41.9999 21.7918 42 23.0498C42 25.397 38.2692 27.2997 33.667 27.2998C32.369 27.2998 31.1402 27.1479 30.0449 26.8779C28.6027 28.1457 25.9137 29 22.833 29C19.4458 28.9999 16.5317 27.9683 15.2285 26.4883C13.854 26.998 12.1625 27.2998 10.333 27.2998C5.73078 27.2997 2 25.397 2 23.0498C2.00014 21.4619 3.70762 20.0772 6.2373 19.3477C6.192 19.1682 6.16699 18.9855 6.16699 18.7998C6.1672 16.4527 9.89775 14.5498 14.5 14.5498C14.7295 14.5498 14.9568 14.5561 15.1816 14.5654C16.4609 13.0566 19.4048 12.0001 22.833 12Z" fill="#D9D9D9"/>
            </g>
            <defs>
                <filter id="filter0_d_120_58" x="10" y="0" width="44" height="21" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset/>
                <feGaussianBlur stdDeviation="1"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_120_58"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_120_58" result="shape"/>
                </filter>
                <filter id="filter1_d_120_58" x="0" y="10" width="44" height="21" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset/>
                <feGaussianBlur stdDeviation="1"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_120_58"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_120_58" result="shape"/>
                </filter>
            </defs>
            </svg>
    );
}

export default WeatherCloudy;