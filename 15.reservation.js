
document.addEventListener('DOMContentLoaded', function() {

    const reservationContainer = document.querySelector('.reservation');


    reservationContainer.addEventListener('mouseenter', function() {
        reservationContainer.style.transition = 'background-color 0.5s ease'; 
        reservationContainer.style.backgroundColor = 'green';
    });


    reservationContainer.addEventListener('mouseleave', function() {

        reservationContainer.classList.add('mouse-out');

   
        setTimeout(function() {
            reservationContainer.classList.remove('mouse-out');
        }, 1000); 
    });
});

document.addEventListener('DOMContentLoaded', function() {
  
    const reservationForm = document.querySelector('.reservation');

   
    reservationForm.addEventListener('mouseleave', function() {
   
        reservationForm.style.backgroundColor = '#186eeef8';
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const reservationForm = document.querySelector('form');

    reservationForm.addEventListener('submit', function(event) {
        // 阻止表單的預設提交行為
        event.preventDefault();

        // 獲取表單欄位的值
        const customerID = document.getElementById('customer_id').value.trim();
        const customerName = document.getElementById('customer_name').value.trim();
        const customerPhone = document.getElementById('customer_phone').value.trim();
        const customerEmail = document.getElementById('customer_email').value.trim();
        const reservationDate = document.getElementById('reservation_date').value.trim();
        const peopleCount = document.getElementById('people_count').value.trim();
        const specialRequests = document.getElementById('special_requests').value.trim();

        // 檢查顧客ID是否為數字且非空
        if (!customerID || isNaN(customerID)) {
            alert('顧客ID必須為數字且不能為空');
            return;
        }

        // 檢查顧客姓名
        if (!customerName || customerName.length < 2 || customerName.length > 30 || !/^[a-zA-Z\u4e00-\u9fa5\s]+$/.test(customerName)) {
            alert('顧客姓名必須介於2至30個字符，只能包含中文、英文');
            return;
        }

        // 檢查聯絡電話
        if (!customerPhone || !/^[\d+\-\s]+$/.test(customerPhone)) {
            alert('聯絡電話格式不正確');
            return;
        }

        // 檢查電子郵件
        if (!customerEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customerEmail)) {
            alert('電子郵件格式不正確');
            return;
        }

        // 檢查訂位日期和時間
        if (!reservationDate || new Date(reservationDate) <= new Date()) {
            alert('訂位日期和時間必須為未來時間');
            return;
        }

        // 檢查訂位人數
        if (!peopleCount || isNaN(peopleCount) || peopleCount <= 0 || peopleCount > 10) {
            alert('訂位人數必須為1至10之間的數字');
            return;
        }

        // 檢查特殊要求或備註（可選填）
        if (specialRequests.length > 50) {
            alert('特殊要求或備註不能超過50個字符');
            return;
        }

        // 如果通過了所有驗證檢查，可以提交表單
        reservationForm.submit();
    });
});

