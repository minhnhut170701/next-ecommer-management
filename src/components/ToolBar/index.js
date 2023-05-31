import React from "react";
import Link from "next/link";

function ToolBar() {
  return (
    <div className="flex flex-col space-y-10 text-white">
      <h1 className="text-3xl mb-10 text-center uppercase">Lucas Shop</h1>
      <Link href="/" className="p-4 border border-b-2 border-rose-500">
        <p>DashBoard</p>
      </Link>
      <Link
        href="/product-management"
        className="p-4 border border-b-2 border-rose-500"
      >
        <p>Quản lý sản phẩm</p>
      </Link>
      <a href="#" className="p-4 border border-b-2 border-rose-500">
        <p>Quản lý người dùng</p>
      </a>
      <a href="#" className="p-4 border border-b-2 border-rose-500">
        <p>Quản lý mã giảm giá</p>
      </a>
    </div>
  );
}

export default ToolBar;
