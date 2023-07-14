type ExitIconProps = {
    color: string;
}
export const ExitIcon = ({color} : ExitIconProps) => {
    return(
        <>
            <svg width="29" height="23" viewBox="0 0 29 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.6538 6.75V4.375C10.6538 3.74511 10.9071 3.14102 11.3579 2.69562C11.8087 2.25022 12.4202 2 13.0577 2H24.5962C25.2337 2 25.8451 2.25022 26.2959 2.69562C26.7467 3.14102 27 3.74511 27 4.375V18.625C27 19.2549 26.7467 19.859 26.2959 20.3044C25.8451 20.7498 25.2337 21 24.5962 21H13.0577C12.4202 21 11.8087 20.7498 11.3579 20.3044C10.9071 19.859 10.6538 19.2549 10.6538 18.625V16.25M6.80769 6.75L2 11.5M2 11.5L6.80769 16.25M2 11.5H14.9032" stroke={color} stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </>
    )
}


