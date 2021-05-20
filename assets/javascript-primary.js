
document.querySelector('.button-rocket').onclick = function() {
    document.documentElement.style.scrollBehavior = 'smooth';
    document.documentElement.scrollIntoView(true);// scroll nên trên đầu của phần tử được chỉ định(ở đây là html element) 
}

function scrollAction() {
    document.documentElement.scrollIntoView(false); // B1: thanh croll sẽ bay xuống kịch trang
        var maxScroll = document.documentElement.scrollTop / 100; // B2: lấy chiều cao tối đa có scroll được, xong rồi chia cho 100(để lấy ra được 1% của tổng px có thể scoll được(tổng là 2900 => 1% = 29))
        document.documentElement.scrollIntoView(true); // B3: thanh scroll bay trở lại đầu trang(tức scrollTop = 0)(cho nó quay nên đầu trang để tránh UX user ko đc tốt khi mà mới truy cập vào mà trang web lại hiển thị ở cuối trang)
        var elementTransform = document.querySelector('.percentPageLength');

        document.body.onscroll = function() {
            var currentPercent = document.documentElement.scrollTop / maxScroll;
            if(document.documentElement.scrollTop > 90) {
                document.querySelector('.button-rocket').classList.add('show-button-rocket');
            } else {
                document.querySelector('.button-rocket').classList.remove('show-button-rocket');
            }
                elementTransform.style.width = `${currentPercent}%`; // khi user scroll thì lấy số px mà user đã scroll đc(dùng scrollTop) chia cho 1% của tổng => ta could biết đc đang scroll được bnhieu % của tổng mà user có thể scroll đc
                // elementTransform.innerText = currentPercent == 0 ? '' : `${Math.ceil(currentPercent)}%`
        }
}