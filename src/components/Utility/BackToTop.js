import React from 'react';

function BackToTop(props) {

    function backToTop() {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }

    return (
        <div>
            <button onClick={() => backToTop()}
                    className={window.pageYOffset > 100 ? "bg-blueGray-800 fixed z-50 w-16 px-2 py-3 shadow text-white rounded-full bg-indigo-500 text-blueGray-300 active:bg-indigo-500 hover:bg-purple-400 shadow hover:shadow-lg mt-3 outline-none focus:outline-none ease-linear transition-all duration-150 " : "hidden"}
                    style={{bottom: 50, right: 100}}
                    type={"button"}>
                <i className="fas fa-chevron-up"></i></button>
        </div>
    );
}

export default BackToTop;
