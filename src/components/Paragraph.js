import React, {useContext} from 'react';
import {ThemeContext} from "./ThemeContext";

function Paragraph() {
    const context = useContext(ThemeContext)
    return (
        <p className={context.theme}>
            Giúp đơn giản hóa việc truyền dữ liệu từ các component cha xuống các component con mà không cần sử dụng đến props
        </p>
    );
}

export default Paragraph;