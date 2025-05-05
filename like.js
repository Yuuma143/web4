document.addEventListener('DOMContentLoaded', function () {
  // Xử lý nút yêu thích (thêm vào danh sách yêu thích)
  const loveBtn = document.getElementById('loveBtn');
  if (loveBtn) {
      loveBtn.addEventListener('click', function () {
          const ten = document.querySelector('.title-box:last-child')?.innerText.trim().replace('💜', '');
          const tacgia = document.querySelector('.title-box a')?.innerText.trim() || "Không rõ";
          const hinhVuong = document.querySelector('.hinh-vuong');
          const backgroundImage = hinhVuong ? getComputedStyle(hinhVuong).backgroundImage : "";
          const anh = backgroundImage ? backgroundImage.slice(5, -2) : ''; // loại bỏ url("...")

          const src = document.querySelector('audio source')?.src || "";

          const loai = "baihat"; // bạn có thể thay đổi thành "casi" nếu là trang ca sĩ

          const baiHat = { ten, tacgia, anh, src, loai };

          // Lưu vào localStorage
          let danhSach = JSON.parse(localStorage.getItem('yeuThich')) || [];
          const daCo = danhSach.find(item => item.ten === ten && item.tacgia === tacgia && item.loai === loai);

          if (!daCo) {
              danhSach.push(baiHat);
              localStorage.setItem('yeuThich', JSON.stringify(danhSach));
              alert("Đã thêm vào yêu thích!");
          } else {
              alert("Bài hát đã có trong yêu thích!");
          }
      });
  }

  // Xử lý hiển thị bài hát yêu thích trên trang yeuthich.html
  const tableNhac = document.querySelector('.nhac-table');
  const tableCaSi = document.querySelector('.casi-table');

  if (tableNhac && tableCaSi) {
      const danhSach = JSON.parse(localStorage.getItem('yeuThich')) || [];
      const baiHatYeuThich = danhSach.filter(item => item.loai === "baihat");
      const caSiYeuThich = danhSach.filter(item => item.loai === "casi");

      // Kiểm tra nếu không có bài hát yêu thích
      if (baiHatYeuThich.length === 0) {
          const row = document.createElement('tr');
          row.innerHTML = `<td colspan="3">Chưa có bài hát yêu thích nào!</td>`;
          tableNhac.appendChild(row);
      } else {
          baiHatYeuThich.forEach(item => {
              const row = document.createElement('tr');
              row.innerHTML = `
                  <th>
                      <img src="${item.anh}" width="150"><br>
                      <b>${item.ten}</b><br>
                      <i>${item.tacgia}</i><br>
                      ${item.src ? `<audio controls src="${item.src}" style="width: 150px;"></audio>` : ""}
                  </th>
              `;
              tableNhac.appendChild(row);
          });
      }

      // Kiểm tra nếu không có ca sĩ yêu thích
      if (caSiYeuThich.length === 0) {
          const row = document.createElement('tr');
          row.innerHTML = `<td colspan="3">Chưa có ca sĩ yêu thích nào!</td>`;
          tableCaSi.appendChild(row);
      } else {
          caSiYeuThich.forEach(item => {
              const row = document.createElement('tr');
              row.innerHTML = `
                  <th>
                      <img src="${item.anh}" width="150"><br>
                      <b>${item.ten}</b><br>
                      <i>${item.tacgia}</i><br>
                  </th>
              `;
              tableCaSi.appendChild(row);
          });
      }
  }
});
