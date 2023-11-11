<template>
  <div class="footer">
      <div class="top">
        <div>
          <h6>Гэрэлт Цох Байшин ТББ</h6>
          <p>gerelt.tsokhb@tokhiruulga.mn</p>
        </div>
        <div class="sec">
          <h6>Tokhiruulga.mn</h6>
          <p>Талархал</p>
          <p>Товч танилцуулга</p>
          <p>Зохиогчийн эрхийн мэдэгдэл</p>
          <p>Үйлдэл гүйцэтгэх чадвар алдалт</p>
          <p>Халуун сэдвүүд</p>
        </div>
        <div>
          <p>Хуулийн мэдээллийн булан</p>
          <p>Нэмэлт сургалт ба зөвлөгөө мэдээлэл</p>
          <p>Ханган нийлүүлэгч</p>
          <p>Санал сэтгэгдэл</p>
          <p>Холбоо барих</p>
        </div>
      </div>
      <div class="btm">
        <div><h6>© 2023 Гэрэлт Цох Байшин ТББ. Бүх эрх хуулиар хамгаалагдсан.</h6></div>
        <div class="social">
          <span><img src="../assets/img/social/Group 56.png" alt=""></span>
          <span><img src="../assets/img/social/Group 57.png" alt=""></span>
          <span><img src="../assets/img/social/Group 58.png" alt=""></span>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style scoped>

  .footer {
    width: 100%;
    height: 412px;
    background-color: var(--success-color);
    display: flex;
    flex-direction: column;
    padding: 51px 345px;
    color: #fff;
  }

  .footer h6 {
    font-weight: bold;
  }
  .top {
    display: inherit;
    flex-direction: row;
    align-items: baseline;
    justify-content: space-between;
  }

  .top .sec {
    margin-left: 260px;
  }
  .btm {
    display: inherit;
    flex-direction: row;
    justify-content: space-between;
  }

  .btm .social {
    display: inherit;
    gap: 6px;
  }
</style>
  