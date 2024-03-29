import React from "react";

const items = [
    {
        svgCode: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><style>.cls-4{fill:none;stroke:#4d535b;stroke-miterlimit:10;stroke-width:2px}</style></defs><g style="isolation:isolate"><g id="white"><path fill="#fff" d="M18 30l2 21h-1v5h28v-5h-2l2-21H18z"/><path fill="#dee0e2" d="M47 30H18l.2 3H44l-2 19h2v4h3v-5h-2l2-21z"/></g><g id="stroke"><path class="cls-4" d="M39.5 29.7L49.7 9.8l5.4 2.8-8.9 17.1"/><path class="cls-4" d="M51 29.2l5.3-10.4-8.9-4.6m-32.5 7.7l4.5 7.8m8.4 0l-6.7-11.8m-.1.9l-5.8 3.7m8.4 7.2l-4.9-9.2m17.8 9.2l.1-12.5-3.4-7.3-3.2 7.6v12.2m6.1-11.9l-6.1.3m3.3 11.6l-.2-10.8m12.5 31.9L47.3 30H18.2l1.6 20.8m-1.4 5.4h28.7v-5H18.4v5zM11.7 8.3a14.7 14.7 0 00-.2 8.9c1.5 4.1 5.1 5 7.9 1.7a2.4 2.4 0 00.7-2.4c-1.1-3.2-4.3-2.2-8.4-8.2z"/></g><path d="M15 23l5 7h8l-6-11-7 4zM11.7 8.3a14.7 14.7 0 00-.2 8.9c1.5 4.1 5.1 5 7.9 1.7a2.4 2.4 0 00.7-2.4c-1.1-3.2-4.3-2.2-8.4-8.2zM39 30l11-20 5 3-9 17h-7zm-9 0h7l-1-12-3-8-3 8v12z" style="mix-blend-mode:darken" fill="#a1f4c0" id="flah"/></g></svg>`,
        name: 'Graphics/Designs'
    },
    {
        svgCode: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><g style="isolation:isolate"><path fill="#fff" d="M11 15h42v29H11z"/><path fill="#dee0e2" d="M11 15v3h39v26h3V15H11z"/><path d="M9.7 11.3h44.6a2.5 2.5 0 012.5 2.5v30.7a2.6 2.6 0 01-2.5 2.6H9.7a2.6 2.6 0 01-2.5-2.6V13.8a2.5 2.5 0 012.5-2.5zm1.1 3.5h42.4v28.7H10.8V14.8zM29 35.7a.9.9 0 011 1 1 1 0 01-1 1 1.1 1.1 0 01-1-1 1 1 0 011-1zm6.4 0a.9.9 0 011 1 1 1 0 01-2 0 .9.9 0 011-1zM20.9 21.9h3.4l3.1 10.2h10.4m-11-3.1h12.1M26 25.9h13.6m-3.1 21.5v6.9m-9 0v-6.9m-8.4 7.3h25.8" fill="none" stroke="#4d535b" stroke-miterlimit="10" stroke-width="2"/><path style="mix-blend-mode:darken" fill="#a1f4c0" d="M27 47h10v7H27z"/></g></svg>`
        , name: 'Digital Marketing'
    },
    {
        svgCode: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><style>.cls-5{fill:none;stroke:#4d535b;stroke-miterlimit:10;stroke-width:2px}</style></defs><g style="isolation:isolate"><g id="white"><path d="M39.7 10.8H13.2a1.6 1.6 0 00-1.6 1.6v39.4a1.6 1.6 0 001.6 1.6h26.5a1.6 1.6 0 001.6-1.6V12.4a1.6 1.6 0 00-1.6-1.6z" fill="#fff"/><path d="M39.7 10.8H13.2a1.6 1.6 0 00-1.6 1.6v1.4h25.1a1.6 1.6 0 011.6 1.6v38h1.4a1.6 1.6 0 001.6-1.6V12.4a1.6 1.6 0 00-1.6-1.6z" fill="#dee0e2"/></g><g id="flah"><path d="M47 16h5v32.3a1.7 1.7 0 01-1.7 1.7 3.3 3.3 0 01-3.3-3.3V16z" style="mix-blend-mode:darken" fill="#a1f4c0"/><path class="cls-5" d="M39.7 10.8H13.2a1.6 1.6 0 00-1.6 1.6v39.4a1.6 1.6 0 001.6 1.6h26.5a1.6 1.6 0 001.6-1.6V12.4a1.6 1.6 0 00-1.6-1.6zm7.2 5.3h5.7v29.7c0 5.9-5.7 5.9-5.7 0V16.1z"/><path class="cls-5" d="M56.3 31.9l.1-11.1h-9.5m2.8 32.6v-3.2M18 19.4h8.4M18 27.3h16.9M18 32h16.9M18 36.6h16.9M18 41.3h8.4"/></g></g></svg>`
        , name: 'Writting & translation'
    },
    {
        svgCode: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><g style="isolation:isolate"><path fill="#fff" d="M15 17h34v30H15z"/><path fill="#dee0e2" d="M15 17v3h32v27h2V17H15z"/><path d="M8 10.9v42.2m6.5-42.2v42.2M8.2 13.5h6.1m-6.1 6.2h6.1m-6.1 6.1h6.1M8.2 32h6.1m-6.1 6.2h6.1m-6.1 6.1h6.1m-6.1 6.2h6.1m35.2-39.6v42.2M56 10.9v42.2m-6.3-39.6h6.1m-6.1 6.2h6.1m-6.1 6.1h6.1M49.7 32h6.1m-6.1 6.2h6.1m-6.1 6.1h6.1m-6.1 6.2h6.1m-40.2-3.8h33.9M15.6 17.3h33.9m-22.2 6.6a9.4 9.4 0 11-3.4 12.8 9.3 9.3 0 013.4-12.8z" fill="none" stroke="#4d535b" stroke-miterlimit="10" stroke-width="2"/><path fill="#4d535b" d="M29.3 27.9v8.8l3.9-2.2 3.8-2.2-3.8-2.2-3.9-2.2z"/><path d="M8 14h6v36H8zm42 0h6v36h-6z" style="mix-blend-mode:darken" fill="#a1f4c0"/></g></svg>`
        , name: 'Video & Animation'
    },
    {
        svgCode: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><style>.cls-4{fill:none;stroke:#4d535b;stroke-miterlimit:10;stroke-width:2px}</style></defs><g style="isolation:isolate"><g id="white"><path d="M29 9.2a8.6 8.6 0 018.5 8.6v13.9a8.5 8.5 0 01-8.5 8.5 8.5 8.5 0 01-8.5-8.5V17.8A8.6 8.6 0 0129 9.2z" fill="#fff"/><path d="M28.5 10.2a8.5 8.5 0 00-6.9 3.6 8.4 8.4 0 014.9-1.6c4.7 0 7.5 3.9 7.5 8.6v13.9a8 8 0 01-1.6 4.9c2.2-1.5 4.6-4 4.6-6.9V18.8a8.6 8.6 0 00-8.5-8.6z" fill="#dee0e2"/></g><g id="stroke"><path class="cls-4" d="M42.3 29.3v3.2A13.4 13.4 0 0129 45.8a13.4 13.4 0 01-13.3-13.3v-3.2M29 45.8v10.5m-10.9.5h21.8"/><path class="cls-4" d="M29 9.2a8.6 8.6 0 018.5 8.6v13.9a8.5 8.5 0 01-8.5 8.5 8.5 8.5 0 01-8.5-8.5V17.8A8.6 8.6 0 0129 9.2zm-8.1 8.3h4.8m-4.8 4.8h4.8m-4.8 4.9h4.8M20.9 32h4.8m6.6-14.5h4.8m-4.8 4.8h4.8m-4.8 4.9h4.8M32.3 32h4.8m10.7-14.1a2.3 2.3 0 013.1 2.1 3.7 3.7 0 01-3.1 3.4c-1.7.3-3.1-.6-3.1-2.2a3.7 3.7 0 013.1-3.3z"/><path class="cls-4" d="M50.8 10.5l7.3 2.6V8.6L50.8 6v14.7"/></g><path d="M47.8 17.9a2.3 2.3 0 013.1 2.1 3.7 3.7 0 01-3.1 3.4c-1.7.3-3.1-.6-3.1-2.2a3.7 3.7 0 013.1-3.3zm2.9-7.4l7.3 2.6V8.6L50.7 6" style="mix-blend-mode:darken" fill="#a1f4c0" id="flah"/></g></svg>`
        , name: 'Music & Audio'
    },
    {
        svgCode: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><style>.cls-4{fill:none;stroke:#4d535b;stroke-miterlimit:10;stroke-width:2px}</style></defs><g style="isolation:isolate"><g id="white"><path fill="#fff" d="M8 21h48v32H8z"/><path fill="#dee0e2" d="M8 21v3h44v29h4V21H8z"/></g><g id="stroke"><path class="cls-4" d="M25.1 30.9l-7.6 6.2 7.6 6.1m13.8-12.3l7.6 6.2-7.6 6.1m-4.5-15.3l-3.9 18.3"/><path class="cls-4" d="M55.5 11.3h-47v41.4h47V11.3zm0 9.4h-47"/><path class="cls-4" d="M49.6 15.4a.9.9 0 00-1 1 1 1 0 001 1 1.1 1.1 0 001-1 1 1 0 00-1-1zm-6.7 0a.9.9 0 00-1 1 1 1 0 001 1 1.1 1.1 0 001-1 1 1 0 00-1-1z"/></g><path style="mix-blend-mode:darken" fill="#a1f4c0" d="M8 11h48v10H8z" id="flah"/></g></svg>`
        , name: 'Programming & Tech'
    },
    {
        svgCode: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><style>.cls-2{fill:#fff}</style></defs><g style="isolation:isolate"><g id="stroke"><path class="cls-2" d="M44.9 44.2a1.8 1.8 0 01-2.3 1.2h-.1a1.9 1.9 0 01-1-1h-.1l-3.8-6.2a1.2 1.2 0 00-1.6-.4 1.4 1.4 0 00-.4 1.7l3.8 6.1.6.9-.2.4a1.8 1.8 0 01-.8.7 1.4 1.4 0 01-1.4.1 1.8 1.8 0 01-1-.9h-.1l-3.8-6.3a1.2 1.2 0 10-2 1.2l3.7 6.3.3.5v.4a2.7 2.7 0 01-.8.7 1.9 1.9 0 01-2.5-.9l-3.6-6a1.2 1.2 0 00-2.1 1.1l3.5 5.8-.2.4a1.8 1.8 0 01-2.6.6 1.8 1.8 0 01-.7-.8h-.1l-6.2-10.5a1.3 1.3 0 00-1.1-.6h-4.8V22.8h12.1l-4.8 4.7a2.1 2.1 0 00-.1 3l.4.3.7.4a6 6 0 006.8 0l6.7-4.3 9.5 15.9a1.7 1.7 0 01.1 1.4z"/><path class="cls-2" d="M45.1 39l-8.5-14.1a1.1 1.1 0 00-.7-.6 1.2 1.2 0 00-1 .2l-7.8 5a4.2 4.2 0 01-4.3 0l-.5-.3 8.6-8.3a3.4 3.4 0 012.3-1h8.6a3.1 3.1 0 011.3.3l7.5 3.1V39z"/><path d="M3 18h10v24H3zm48 0h10v24H51z" style="mix-blend-mode:darken" fill="#a1f4c0"/><path d="M44.8 42.8l-9.5-15.9-6.7 4.3a6 6 0 01-6.8 0l-.7-.4-.4-.3a2.1 2.1 0 01.1-3l4.8-4.7H13.5v2h9.1l3.4.2c-.8.8-1.7-.5-5 4a28.4 28.4 0 003.1 1.8v.2c2.1 1.3 3.4-.2 4 0l5-4 9.8 17.8c.1.1.1.1.1.2l.6.4h.1c1 .3 1-.2 1.3-1.2a1.7 1.7 0 00-.2-1.4z" fill="#dee0e2"/><path d="M60.8 17.4h-9.5a1.2 1.2 0 00-1.2 1.2V21l-6.4-2.6a4.9 4.9 0 00-2.1-.4h-8.2a5.4 5.4 0 00-3.9 1.5l-1.4 1.4H13.9v-2.3a1.2 1.2 0 00-1.2-1.2H3.2A1.2 1.2 0 002 18.6v23.3a1.2 1.2 0 001.2 1.2h9.5a1.2 1.2 0 001.2-1.2V41H18l5.6 9.4a4.5 4.5 0 003.7 2.2 4.2 4.2 0 003.3-1.7l.9.4 1.4.2a4.2 4.2 0 003.5-2h.2l1.3.2a4.1 4.1 0 003.6-2h.1v-.3l1.1.2a4.1 4.1 0 004.1-4.2 3.9 3.9 0 00-.4-1.8l-.3-.5H50v.9a1.2 1.2 0 001.2 1.2h9.5a1.2 1.2 0 001.3-1.3V18.6a1.2 1.2 0 00-1.2-1.2zM11.7 41H4V19.4h7.7zm33.2 3.2a1.8 1.8 0 01-2.3 1.2h-.1a1.9 1.9 0 01-1-1h-.1l-3.8-6.2a1.2 1.2 0 00-1.6-.4 1.4 1.4 0 00-.4 1.7l3.8 6.1.6.9-.2.4a1.8 1.8 0 01-.8.7 1.4 1.4 0 01-1.4.1 1.8 1.8 0 01-1-.9h-.1l-3.8-6.3a1.2 1.2 0 10-2 1.2l3.7 6.3.3.5v.4a2.7 2.7 0 01-.8.7 1.9 1.9 0 01-2.5-.9l-3.6-6a1.2 1.2 0 00-2.1 1.1l3.5 5.8-.2.4a1.8 1.8 0 01-2.6.6 1.8 1.8 0 01-.7-.8h-.1l-6.2-10.5a1.3 1.3 0 00-1.1-.6h-4.8V22.8h12.1l-4.8 4.7a2.1 2.1 0 00-.1 3l.4.3.7.4a6 6 0 006.8 0l6.7-4.3 9.5 15.9a1.7 1.7 0 01.1 1.4zm.2-5.2l-8.5-14.1a1.1 1.1 0 00-.7-.6 1.2 1.2 0 00-1 .2l-7.8 5a4.2 4.2 0 01-4.3 0l-.5-.3 8.6-8.3a3.4 3.4 0 012.3-1h8.6a3.1 3.1 0 011.3.3l7.5 3.1V39zM60 41h-7.7V19.4H60z" fill="#4d535b"/></g></g></svg>`
        , name: 'Bussiness'
    },
    {
        svgCode: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><style>.cls-4{fill:none;stroke:#4d535b;stroke-miterlimit:10}.cls-4{stroke-width:2.1px}</style></defs><g style="isolation:isolate"><g id="stroke"><path d="M12 20.2h34.7V53a4 4 0 01-4 4H16a4 4 0 01-4-4V20.2z" fill="#fff"/><path d="M12 20.2v4.2h30.5v31.5c0 .4-.1.7-.1 1 1.8-.4 4.3-2.1 4.3-4.1V20.2z" fill="#dee0e2"/><path class="cls-4" d="M13 20.2h32.7a1 1 0 011 1V52a5 5 0 01-5 5H17a5 5 0 01-5-5V21.2a1 1 0 011-1zm8.5 0v8.4"/><rect x="16.7" y="29.1" width="9.5" height="11.56" rx="1" stroke-width="2.23" fill="none" stroke="#4d535b" stroke-miterlimit="10"/><rect x="16.7" y="29.1" width="9.5" height="11.56" rx="1" style="mix-blend-mode:darken" fill="#a1f4c0"/><path class="cls-4" d="M46.7 28.6a9.5 9.5 0 010 18.9m-16.8-42V16"/><path d="M36.2 7.6V16M23.6 7.6V16" stroke-width="1.88" fill="none" stroke="#4d535b" stroke-miterlimit="10"/></g></g></svg>`
        , name: 'Lifestyle'
    },
    {
        svgCode: `<svg width="59" height="41" viewBox="0 0 59 41" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.571 9.457V7.343H49.63v2.114H11.57zm39.115-5.286V2.057h3.171A3.171 3.171 0 0157.03 5.23v26.957h-2.643v-25.9a2.114 2.114 0 00-2.114-2.115h-1.586z" fill="#DEE0E2"/><path d="M57.543 35.543A4.456 4.456 0 0153.086 40H11.57V6.571h8.986" stroke="#4D535B" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/><path d="M50.857 32.2c.468-.791 1.415-1.114 2.229-1.114a4.456 4.456 0 014.457 4.457V5.457A4.456 4.456 0 0053.086 1c-.814 0-1.85.19-2.229 1.114V32.2z" stroke="#4D535B" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/><path d="M3.786 6.171C2.248 6.171 1 7.174 1 8.4v25.5l2.786 5.572L6.57 33.9V8.4c0-1.226-1.248-2.229-2.785-2.229z" fill="#A1F4C0" stroke="#4D535B" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/><path d="M1 12.857h5.571m13.086-6.286h31.2m-24.485 4.886h-8.458v9.514h8.457v-9.514zm5.285 0H45.93m-14.273 4.457H45.93m-14.273 4.458h10.929" stroke="#4D535B" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/><path d="M39.057 35.772h7.4v-7.4h-7.4v7.4zm-6.343-8.458h-7.4v8.458h7.4v-8.458zm6.343-2.114h-6.343v10.572h6.343V25.2zM17.914 35.772h7.4v-4.23h-7.4v4.23z" stroke="#4D535B" stroke-width="2" stroke-miterlimit="10"/></svg>`
        , name: 'Data'
    },
    {
        svgCode: `<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M58.703 18.723h-14l-7-9h-17l-7 9h-7c-1.7 0-3 1.3-3 3v27c0 1.7 1.3 3 3 3h52c1.7 0 3-1.3 3-3v-27c0-1.7-1.3-3-3-3z" fill="#fff" stroke="#404145" stroke-width="2" stroke-miterlimit="10"/><path d="M50.703 15.723v-2h7v2" stroke="#404145" stroke-width="2" stroke-miterlimit="10"/><path d="M29.703 46.723c7.732 0 14-6.268 14-14s-6.268-14-14-14-14 6.268-14 14 6.268 14 14 14z" fill="#D0F7E6" stroke="#404145" stroke-width="2" stroke-miterlimit="10"/><path d="M29.703 42.723c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10z" fill="#fff" stroke="#404145" stroke-width="2" stroke-miterlimit="10"/><path d="M24.103 30.723c.8-2.3 3-4 5.7-4m-5.3 9c-.5-.9-.8-1.9-.8-3m-16-9h6" stroke="#404145" stroke-width="2" stroke-miterlimit="10"/><path d="M58.703 51.723h-9v-33h9c1.7 0 3 1.3 3 3v27c0 1.6-1.3 3-3 3z" fill="#D0F7E6" stroke="#404145" stroke-width="2" stroke-miterlimit="10"/><path d="M42.703 44.723h2" stroke="#404145" stroke-width="2" stroke-miterlimit="10"/></svg>`
        , name: 'Photography'
    },
    // Add more items as needed
];

const NmSection2 = () => {
    return (
        <div className='m-16'>
            <h1 className="font-semibold md:text-left text-center text-4xl">You need it, we've got it</h1>
            <div className="grid md:grid-cols-3 xl:grid-cols-5  sm:grid-cols-2 grid-cols-1 gap-4 md:gap-12 p-5 md:p-10 md:px-36 px-auto">
                {items.map((item, index) => (
                    <div key={index} className="justify-self-center">
                        <Img svgCode={item.svgCode} name={item.name} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default NmSection2


const Img = ({ svgCode, name, svgSize }) => {
    const containerStyle = {
        width: svgSize ? 'auto' : 'auto', // Set width based on prop or use 'auto' for default size
        height: svgSize ? svgSize : 'auto', // Set height based on prop or use 'auto' for default size
    };

    // Responsive classes for small screens
    if (window.innerWidth < 768) { // Assuming 768 is your small screen breakpoint
        containerStyle.width = 'full'; // full width on small screens
        containerStyle.maxWidth = '20vh'; // max-width: 20vh on small screens
    }

    // Responsive classes for medium and larger screens
    if (window.innerWidth >= 768) { // Assuming 768 is your medium screen breakpoint
        containerStyle.width = '10vh'; // Set width: 10vh for medium and larger screens
    }
    return (
        <div className="group text-gray-700">
            <div className="text-center">
                <div dangerouslySetInnerHTML={{ __html: svgCode }} className='p-1 mx-auto' style={containerStyle} />
                <hr className=" my-2 border-t duration-300 group-hover:border-green-500 group-hover:scale-150 border-gray-500 transition-transform" />
                <div className="font-semibold">{name}</div>
            </div>
        </div>
    );
};