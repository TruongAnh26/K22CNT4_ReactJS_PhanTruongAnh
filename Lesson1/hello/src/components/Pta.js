import React from "react";

export default function Pta({name, phone}) {
    return (
        <React.Fragment>
            <p>Họ tên: {name}</p>
            <p>Số điện thoại: {phone}</p>
        </React.Fragment>
    )
}