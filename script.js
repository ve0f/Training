// ملف JavaScript الخارجي للمشروع
window.addEventListener('DOMContentLoaded', function () {
  var pageName = document.body.getAttribute('data-page');

  // رسالة ترحيبية مطلوبة ضمن أوامر المخرجات.
  if (pageName === 'home') {
    window.alert('مرحباً بك في موقع التدريب التقني ');
  }

  // التحقق من نموذج التسجيل.
  var registrationForm = document.getElementById('registrationForm');
  if (registrationForm) {
    registrationForm.addEventListener('submit', function (event) {
      event.preventDefault();
      var studentName = document.getElementById('studentName').value.trim();
      var email = document.getElementById('studentEmail').value.trim();
      var password = document.getElementById('studentPassword').value;
      var track = document.getElementById('trainingTrack').value;
      var notes = document.getElementById('studentNotes').value.trim();
      var status = document.getElementById('formStatus');

      if (studentName === '' || email === '' || password === '' || track === '' || notes === '') {
        status.textContent = 'غير مقبول: يرجى تعبئة جميع الحقول.';
        status.className = 'status error';
        window.alert('غير مقبول: توجد حقول فارغة.');
      } else if (password.length < 6) {
        status.textContent = 'غير مقبول: كلمة المرور يجب ألا تقل عن 6 أحرف.';
        status.className = 'status error';
        window.alert('غير مقبول: كلمة المرور قصيرة.');
      } else if (!registrationForm.checkValidity()) {
        status.textContent = 'غير مقبول: يرجى التأكد من صحة البريد الإلكتروني.';
        status.className = 'status error';
        window.alert('غير مقبول: تحقق من البيانات المدخلة.');
      } else {
        status.textContent = 'مقبول: تم التحقق من الحقول بنجاح. (نموذج تجريبي فقط)';
        status.className = 'status success';
        window.alert('مقبول: تم التحقق من البيانات بنجاح.');
      }
    });
  }

  // حاسبة تقديرية تستخدم المتغيرات والعمليات الحسابية والجمل الشرطية.
 // الحاسبة التفاعلية متعددة البرامج.

var calculateButton = document.getElementById('calculateButton');

if (calculateButton) {

    calculateButton.addEventListener('click', function () {

        var selectedCourses = document.querySelectorAll(
            '#courseType input[type="checkbox"]:checked'
        );

        var participantCount = Number(
            document.getElementById('participantCount').value
        );

        var output = document.getElementById('calculationResult');

        var programsTotal = 0;
        var discount = 0;

        // التحقق من اختيار البرامج.

        if (selectedCourses.length === 0) {

            output.textContent = 'يرجى اختيار برنامج تدريبي واحد على الأقل.';

        } else if (
            participantCount < 1 ||
            participantCount > 30 ||
            isNaN(participantCount) ||
            participantCount % 1 !== 0
        ) {

            output.textContent = 'يرجى إدخال عدد صحيح من 1 إلى 30 متدرباً.';

        } else {

            // جمع أسعار البرامج المختارة باستخدام for.

            for (var i = 0; i < selectedCourses.length; i++) {

                var coursePrice = Number(selectedCourses[i].value);

                programsTotal += coursePrice;

            }

            // حساب التكلفة حسب عدد المتدربين.

            var total = programsTotal * participantCount;

            // خصم 10% عند تسجيل خمسة متدربين أو أكثر.

            if (participantCount >= 5) {

                discount = total * 0.10;

            } else {

                discount = 0;

            }

            var finalTotal = total - discount;

            // عرض نتيجة الحساب.

            output.innerHTML =
                '<strong>عدد البرامج المختارة:</strong> ' +
                selectedCourses.length + '<br>' +

                '<strong>تكلفة البرامج للفرد:</strong> ' +
                programsTotal.toFixed(2) + ' ريال<br>' +

                '<strong>عدد المتدربين:</strong> ' +
                participantCount + '<br>' +

                '<strong>التكلفة قبل الخصم:</strong> ' +
                total.toFixed(2) + ' ريال<br>' +

                '<strong>الخصم:</strong> ' +
                discount.toFixed(2) + ' ريال<br>' +

                '<strong>التكلفة النهائية:</strong> ' +
                finalTotal.toFixed(2) + ' ريال';

        }

    });

}


  // حلقة for لعرض خطوات التسجيل تلقائياً.
  var stepsList = document.getElementById('stepsList');
  if (stepsList) {
    var steps = [
      'اختر البرنامج التدريبي المناسب.',
      'أدخل بيانات التسجيل المطلوبة.',
      'راجع مدة البرنامج والتكلفة التقديرية.',
      'أرسل النموذج التجريبي لإتمام التحقق.'
    ];
    for (var i = 0; i < steps.length; i++) {
      var listItem = document.createElement('li');
      listItem.textContent = steps[i];
      stepsList.appendChild(listItem);
    }
  }
});
