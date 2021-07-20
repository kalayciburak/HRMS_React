import React from 'react';

function BackToBottom(props) {
    function backToBottom() {
        window.scrollTo({left: 0, top: document.body.scrollHeight, behavior: "smooth"});
    }

    return (
        <div>
            <button onClick={() => backToBottom()}
                    className={window.pageYOffset < 100 ? "bg-blueGray-800 fixed z-50 w-16 px-2 py-3 shadow text-white rounded-full bg-indigo-500 text-blueGray-300 active:bg-indigo-500 hover:bg-purple-400 shadow hover:shadow-lg mt-3 outline-none focus:outline-none ease-linear transition-all duration-150 " : "hidden"}
                    style={{bottom: 50, left: 100}}
                    title={"Aşşagı Git"}
                    type={"button"}>
                <i className="fas fa-chevron-down"></i></button>
        </div>
    );
}

export default BackToBottom;
