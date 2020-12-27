import React from "react";
import CardPostHorizontal from "./CardPostHorizontal";

const ListPostHorizontal = ({header, news})=>{
    const title = header || "Tin đăng gần đây"
    const data = news ||  fakenews
    // news là mảng chứa tất cả đối tượng tin đăng
    return(
        <>
            <div class="container" style={{float: "left"}}>
                <h2>{title}</h2>
                <div className="mt-3"></div>
                <div class="items">
                    <div class="row">
                        {data && data.map(
                            (x, index ) =>
                            <CardPostHorizontal key={index} news={x}/> 
                        )}
                        {!data ? <h3 style={{color: 'red'}}>Không có tin nào</h3>: null}
                    </div>
                </div>
            </div>
        </>
    )
}
export default ListPostHorizontal


const fakenews = [
    {
        "postID": 1,
        "roomID": 1,
        "id_owner": 1,
        "title": "Phòng trọ giá rẻ",
        "address": "Me Tri Ha, Nam Tu Liem, Ha Noi",
        "duration": 22,
        "quantity": 1,
        "price": 2500000,
        "tiencoc": 0,
        "views": 1,
        "like": 1,
        "discription": "✨✨PHÒNG TRỌ GIÁ RẺ CHỈ TỪ - 3.500.000 - 3.700.000- 4.400.000 - 5.200.000 VNĐ/ Tháng ✨✨\r\n\r\n❎❎CAM KẾT VỀ❎❎\r\n✔️ Chất lượng hình ảnh, thông tin chính xác.\r\n✔️ Nhân viên luôn sẵn sàng hỗ trợ tư vấn nhiệt tình.\r\n✔️ Mọi thông tin đều được minh bạch rõ ràng trước khi cho khách ký cọc và làm hợp đồng thuê phòng với chủ nhà.\r\n✔️ Hệ thống mới tinh, dịch vụ chất lượng, nội thất hiện đại với mức giá tốt .\r\n\r\n💥Vị trí :\r\n- KDC Tân Quy gần Lotte Mart Q7\r\n- Nằm trên trục đường Huỳnh Tấn Phát dễ dàng đi chuyển sang Quận 4.\r\nGần Phú Mỹ Hưng, Crescent Mall, KCX Tân Thuận..\r\n\r\n❌❌GIỜ GIẤC TỰ DO 👏🏻👏🏻\r\n\r\n🏆 Nội thất phòng bao gồm:\r\n☑ Máy lạnh\r\n☑ Tủ lạnh\r\n☑ Máy giặt\r\n☑ Máy nóng lạnh\r\n☑ Tủ bếp\r\n☑ Lavabo + vòi nước\r\n☑ Kệ Bếp\r\n\r\n❌ĐẶC BIỆT❌: Có ưu đãi khủng cho khách hàng ở dài hạn!\r\n\r\n💃call/zalo:  Huỳnh Đức để được tư vấn phòng đẹp giá tốt ngay nhé mọi người <3",
        "images": "[\"http://localhost:4000/images/img1.jpg\",\"http://localhost:4000/images/img2.jpg\",\"http://localhost:4000/images/img3.jpg\",\"http://localhost:4000/images/img4.jpg\", \"http://localhost:4000/images/img5.jpg\"]",
        "available": "not rented",
        "createAt": "2020-12-03T00:43:04.000Z",
        "status": "active",
        "updateAt": "2020-12-03T00:43:08.000Z",
        "id": 1,
        "roomType": " Phòng trọ",
        "area": 25,
        "shared": 1,
        "bathroom": "Chung, không có nóng lạnh",
        "kitchen": "Chung",
        "airConditioner": 0,
        "nonglanh": 1,
        "balcony": 0,
        "typeCostElectric": 1,
        "electricity": 0,
        "water": 0,
        "near_place": "tòa nhà KeangNam,BigC the Garden,UBND phường Mễ Trì",
        "other": null,
        "name": "Phạm Quang Thịnh",
        "email": "thinh@gmamil.com",
        "phone": "",
        "place": "Thái Thụy - Thái Bình",
        "cmt": "022355568927",
        "password": "$2b$10$IehZD5V7Y1QpO3P6rPTQgOrSe/fFBvBKyFaaMt/iTqDGwOvCqOJIa",
        "avatar": "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
    },
    {
        "postID": 2,
        "roomID": 16,
        "id_owner": 6,
        "title": "Phòng trọ giá rẻ",
        "address": "Tôn Đức Thắng, Đống Đa, Hà Nội",
        "duration": 7,
        "quantity": 1,
        "price": 4000000,
        "tiencoc": 0,
        "views": 1,
        "like": 1,
        "discription": null,
        "images": "[\"http://localhost:4000/images/img1.jpg\",\"http://localhost:4000/images/img2.jpg\",\"http://localhost:4000/images/img3.jpg\",\"http://localhost:4000/images/img4.jpg\", \"http://localhost:4000/images/img5.jpg\"]",
        "available": "not rented",
        "createAt": "2020-12-24T03:03:52.000Z",
        "status": "pendding",
        "updateAt": "2020-12-24T03:03:52.000Z",
        "id": 16,
        "roomType": "Chung cư mini",
        "area": 50,
        "shared": 0,
        "bathroom": "Khép kín, có nóng lạnh",
        "kitchen": "Riêng",
        "airConditioner": 1,
        "nonglanh": 1,
        "balcony": 1,
        "typeCostElectric": 2,
        "electricity": 4000,
        "water": 35000,
        "near_place": "Học viện Ngoại Giao",
        "other": null,
        "name": "Nguyen Minh",
        "email": "minhnguyen@gmail.com",
        "phone": "0567891014",
        "place": "Ha Dong - Ha Noi",
        "cmt": "1234567216",
        "password": "1234678",
        "avatar": "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
    },
    {
        "postID": 6,
        "roomID": 11,
        "id_owner": 1,
        "title": "Phòng trọ giá rẻ Mễ Trì Hạ",
        "address": "Số 17 ngách 126 ngõ 14 Mễ Trì Hạ, Mễ Trì, Nam Từ Liêm, Hà Nội",
        "duration": 30,
        "quantity": 4,
        "price": 2000000,
        "tiencoc": 1000000,
        "views": 1,
        "like": 1,
        "discription": null,
        "images": "[\"http://localhost:4000/images/img1.jpg\",\"http://localhost:4000/images/img2.jpg\",\"http://localhost:4000/images/img3.jpg\",\"http://localhost:4000/images/img4.jpg\", \"http://localhost:4000/images/img5.jpg\"]",
        "available": "not rented",
        "createAt": "2020-12-03T00:43:04.000Z",
        "status": "active",
        "updateAt": "2020-12-03T00:43:08.000Z",
        "id": 11,
        "roomType": "Phòng trọ",
        "area": 20,
        "shared": 1,
        "bathroom": "Chung, có nóng lạnh",
        "kitchen": "Chung",
        "airConditioner": 1,
        "nonglanh": 1,
        "balcony": 1,
        "typeCostElectric": 0,
        "electricity": 4000,
        "water": 25000,
        "near_place": "[\"Tòa nhà Keangnam\",\"Cung triển lãm quy hoạch quốc gia\"]",
        "other": "",
        "name": "Phạm Quang Thịnh",
        "email": "thinh@gmamil.com",
        "phone": "",
        "place": "Thái Thụy - Thái Bình",
        "cmt": "022355568927",
        "password": "$2b$10$IehZD5V7Y1QpO3P6rPTQgOrSe/fFBvBKyFaaMt/iTqDGwOvCqOJIa",
        "avatar": "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
    },
    {
        "postID": 7,
        "roomID": 2,
        "id_owner": 2,
        "title": "Phòng trọ giá rẻ",
        "address": "Phạm Hùng, Nam Từ Liên, Hà Nội",
        "duration": 7,
        "quantity": 1,
        "price": 5000000,
        "tiencoc": 0,
        "views": 1,
        "like": 1,
        "discription": "Phòng trọ giá rẻ",
        "images": "[\"http://localhost:4000/images/img1.jpg\",\"http://localhost:4000/images/img2.jpg\",\"http://localhost:4000/images/img3.jpg\",\"http://localhost:4000/images/img4.jpg\", \"http://localhost:4000/images/img5.jpg\"]",
        "available": "not rented",
        "createAt": "2020-12-14T17:35:16.000Z",
        "status": "active",
        "updateAt": "2020-12-14T17:35:16.000Z",
        "id": 2,
        "roomType": "Nhà nguyên căn",
        "area": 35,
        "shared": 1,
        "bathroom": "Chung, có nóng lạnh",
        "kitchen": "Chung",
        "airConditioner": 1,
        "nonglanh": 1,
        "balcony": 0,
        "typeCostElectric": 2,
        "electricity": 3500,
        "water": 35000,
        "near_place": "Sân vận động Quốc Gia Mỹ Đình",
        "other": null,
        "name": "Pham quang",
        "email": "pqthinh@gmail.com",
        "phone": "0987541234",
        "place": "Me Tri Ha- Nam Tu Liem - Ha Noi",
        "cmt": "0987656543213",
        "password": "$2b$10$PLRyKHTB7os995.CUGSWJ.xGKErShguPP5P3r8XjHexhylM4oqM6e",
        "avatar": "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
    },
    {
        "postID": 8,
        "roomID": 12,
        "id_owner": 3,
        "title": "Phòng trọ giá rẻ",
        "address": "Xuân Thủy, Cầu Giấy, Hà Nội",
        "duration": 7,
        "quantity": 1,
        "price": 5000000,
        "tiencoc": 0,
        "views": 1,
        "like": 1,
        "discription": null,
        "images": "[\"http://localhost:4000/images/img1.jpg\",\"http://localhost:4000/images/img2.jpg\",\"http://localhost:4000/images/img3.jpg\",\"http://localhost:4000/images/img4.jpg\", \"http://localhost:4000/images/img5.jpg\"]",
        "available": "not rented",
        "createAt": "2020-12-24T03:02:14.000Z",
        "status": "active",
        "updateAt": "2020-12-24T03:02:14.000Z",
        "id": 12,
        "roomType": "Chung cư mini",
        "area": 40,
        "shared": 1,
        "bathroom": "Khép kín, có nóng lạnh",
        "kitchen": "Khu bếp riêng",
        "airConditioner": 1,
        "nonglanh": 1,
        "balcony": 0,
        "typeCostElectric": 1,
        "electricity": 3000,
        "water": 30000,
        "near_place": "Đại học Quốc Gia Hà Nội, 144 Xuân Thủy, Dịch Vọng Hậu, Cầu Giấy, Hà Nội",
        "other": null,
        "name": "Vuong Tuan",
        "email": "tuanvuong@gmail.com",
        "phone": "0123456788",
        "place": "Ba Dinh - Ha Noi",
        "cmt": "1234567895",
        "password": "1234567",
        "avatar": "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
    },
    {
        "postID": 9,
        "roomID": 3,
        "id_owner": 5,
        "title": "Phòng trọ",
        "address": "Hoàng Văn Thái, Thanh Xuân, Hà Nội",
        "duration": 7,
        "quantity": 1,
        "price": 4000000,
        "tiencoc": 0,
        "views": 1,
        "like": 1,
        "discription": null,
        "images": "[\"http://localhost:4000/images/img1.jpg\",\"http://localhost:4000/images/img2.jpg\",\"http://localhost:4000/images/img3.jpg\",\"http://localhost:4000/images/img4.jpg\", \"http://localhost:4000/images/img5.jpg\"]",
        "available": "not rented",
        "createAt": "2020-12-24T03:03:52.000Z",
        "status": "pendding",
        "updateAt": "2020-12-24T03:03:52.000Z",
        "id": 3,
        "roomType": "Phòng trọ",
        "area": 20,
        "shared": 0,
        "bathroom": "Khép kín, có nóng lạnh",
        "kitchen": "Riêng",
        "airConditioner": 1,
        "nonglanh": 1,
        "balcony": 1,
        "typeCostElectric": 0,
        "electricity": 3500,
        "water": 20000,
        "near_place": "Đại học Kinh Tế Quốc Dân",
        "other": null,
        "name": "Vuong Son",
        "email": "sonvuong@gmail.com",
        "phone": "0123456785",
        "place": "Hoan Kiem - Ha Noi",
        "cmt": "123456789412",
        "password": "$2b$10$6nOUa6DGywmwrExB3ic/6OcscdJ8HkOd7jkZlQOsboYHMvQOM9T.K",
        "avatar": "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
    },
    {
        "postID": 10,
        "roomID": 4,
        "id_owner": 4,
        "title": "Nhà nguyên căn",
        "address": "Trường Chinh, Thanh Xuân, Hà Nội",
        "duration": 7,
        "quantity": 1,
        "price": 3000000,
        "tiencoc": 0,
        "views": 1,
        "like": 1,
        "discription": null,
        "images": "[\"http://localhost:4000/images/img1.jpg\",\"http://localhost:4000/images/img2.jpg\",\"http://localhost:4000/images/img3.jpg\",\"http://localhost:4000/images/img4.jpg\", \"http://localhost:4000/images/img5.jpg\"]",
        "available": "not rented",
        "createAt": "2020-12-24T03:02:14.000Z",
        "status": "active",
        "updateAt": "2020-12-24T03:02:14.000Z",
        "id": 4,
        "roomType": "Nhà nguyên căn",
        "area": 80,
        "shared": 0,
        "bathroom": "Khép kín, có nóng lạnh",
        "kitchen": "Riêng",
        "airConditioner": 1,
        "nonglanh": 1,
        "balcony": 1,
        "typeCostElectric": 0,
        "electricity": 3500,
        "water": 20000,
        "near_place": "Trường THPT Chu Văn An",
        "other": null,
        "name": "Tuan Son",
        "email": "sontuan@gmail.com",
        "phone": "0567891011",
        "place": "Dong Da - Ha Noi",
        "cmt": "1234567216",
        "password": "12345677",
        "avatar": "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
    },
    {
        "postID": 11,
        "roomID": 5,
        "id_owner": 6,
        "title": "Phòng trọ giá rẻ",
        "address": "Nguyễn Trãi, Thanh Xuân, Hà Nội",
        "duration": 7,
        "quantity": 1,
        "price": 6000000,
        "tiencoc": 0,
        "views": 1,
        "like": 1,
        "discription": null,
        "images": "[\"http://localhost:4000/images/img1.jpg\",\"http://localhost:4000/images/img2.jpg\",\"http://localhost:4000/images/img3.jpg\",\"http://localhost:4000/images/img4.jpg\", \"http://localhost:4000/images/img5.jpg\"]",
        "available": "not rented",
        "createAt": "2020-12-24T03:03:52.000Z",
        "status": "pendding",
        "updateAt": "2020-12-24T03:03:52.000Z",
        "id": 5,
        "roomType": "Chung cư nguyên căn",
        "area": 100,
        "shared": 1,
        "bathroom": "Chung, có nóng lạnh",
        "kitchen": "Chung",
        "airConditioner": 1,
        "nonglanh": 1,
        "balcony": 1,
        "typeCostElectric": 2,
        "electricity": 4000,
        "water": 40000,
        "near_place": "Hồ Tây",
        "other": null,
        "name": "Nguyen Minh",
        "email": "minhnguyen@gmail.com",
        "phone": "0567891014",
        "place": "Ha Dong - Ha Noi",
        "cmt": "1234567216",
        "password": "1234678",
        "avatar": "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
    },
    {
        "postID": 12,
        "roomID": 9,
        "id_owner": 4,
        "title": "Phòng trọ giá rẻ",
        "address": "Trần Duy Hưng, Cầu Giấy, Hà Nội",
        "duration": 7,
        "quantity": 1,
        "price": 5500000,
        "tiencoc": 0,
        "views": 1,
        "like": 1,
        "discription": null,
        "images": "[\"http://localhost:4000/images/img1.jpg\",\"http://localhost:4000/images/img2.jpg\",\"http://localhost:4000/images/img3.jpg\",\"http://localhost:4000/images/img4.jpg\", \"http://localhost:4000/images/img5.jpg\"]",
        "available": "not rented",
        "createAt": "2020-12-24T03:02:14.000Z",
        "status": "active",
        "updateAt": "2020-12-24T03:02:14.000Z",
        "id": 9,
        "roomType": "Nhà nguyên căn",
        "area": 120,
        "shared": 1,
        "bathroom": "Chung, có nóng lạnh",
        "kitchen": "Chung",
        "airConditioner": 1,
        "nonglanh": 1,
        "balcony": 1,
        "typeCostElectric": 3,
        "electricity": 4000,
        "water": 45000,
        "near_place": "Hồ Gươm",
        "other": null,
        "name": "Tuan Son",
        "email": "sontuan@gmail.com",
        "phone": "0567891011",
        "place": "Dong Da - Ha Noi",
        "cmt": "1234567216",
        "password": "12345677",
        "avatar": "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
    },
    {
        "postID": 13,
        "roomID": 10,
        "id_owner": 3,
        "title": "Phòng trọ giá rẻ",
        "address": "Giáp Nhất, Thanh Xuân, Hà Nội",
        "duration": 7,
        "quantity": 1,
        "price": 0,
        "tiencoc": 0,
        "views": 1,
        "like": 1,
        "discription": null,
        "images": "[\"http://localhost:4000/images/img1.jpg\",\"http://localhost:4000/images/img2.jpg\",\"http://localhost:4000/images/img3.jpg\",\"http://localhost:4000/images/img4.jpg\", \"http://localhost:4000/images/img5.jpg\"]",
        "available": "not rented",
        "createAt": "2020-12-24T03:02:14.000Z",
        "status": "active",
        "updateAt": "2020-12-24T03:02:14.000Z",
        "id": 10,
        "roomType": "Phòng trọ",
        "area": 25,
        "shared": 0,
        "bathroom": "Khép kín, không nóng lạnh",
        "kitchen": "Chung",
        "airConditioner": 0,
        "nonglanh": 1,
        "balcony": 0,
        "typeCostElectric": 1,
        "electricity": 3000,
        "water": 30000,
        "near_place": "Đại học Công Nghiệp",
        "other": null,
        "name": "Vuong Tuan",
        "email": "tuanvuong@gmail.com",
        "phone": "0123456788",
        "place": "Ba Dinh - Ha Noi",
        "cmt": "1234567895",
        "password": "1234567",
        "avatar": "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
    },
    {
        "postID": 14,
        "roomID": 13,
        "id_owner": 5,
        "title": "Phòng trọ giá rẻ",
        "address": "Nguyễn Ngọc Vũ, Cầu GIấy, Hà Nội",
        "duration": 7,
        "quantity": 1,
        "price": 3000000,
        "tiencoc": 0,
        "views": 1,
        "like": 1,
        "discription": null,
        "images": "[\"http://localhost:4000/images/img1.jpg\",\"http://localhost:4000/images/img2.jpg\",\"http://localhost:4000/images/img3.jpg\",\"http://localhost:4000/images/img4.jpg\", \"http://localhost:4000/images/img5.jpg\"]",
        "available": "not rented",
        "createAt": "2020-12-24T03:03:52.000Z",
        "status": "pendding",
        "updateAt": "2020-12-24T03:03:52.000Z",
        "id": 13,
        "roomType": "Chung cư nguyên căn",
        "area": 50,
        "shared": 0,
        "bathroom": "Khép kín, có nóng lạnh",
        "kitchen": "Khu bếp riêng",
        "airConditioner": 1,
        "nonglanh": 1,
        "balcony": 1,
        "typeCostElectric": 2,
        "electricity": 4000,
        "water": 40000,
        "near_place": "Royal City, Thanh Xuân, Hà Nội",
        "other": null,
        "name": "Vuong Son",
        "email": "sonvuong@gmail.com",
        "phone": "0123456785",
        "place": "Hoan Kiem - Ha Noi",
        "cmt": "123456789412",
        "password": "$2b$10$6nOUa6DGywmwrExB3ic/6OcscdJ8HkOd7jkZlQOsboYHMvQOM9T.K",
        "avatar": "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
    },
    {
        "postID": 15,
        "roomID": 14,
        "id_owner": 4,
        "title": "Phòng trọ giá rẻ",
        "address": "Thái Hà, Đống Đa, Hà Nội",
        "duration": 7,
        "quantity": 1,
        "price": 4500000,
        "tiencoc": 0,
        "views": 1,
        "like": 1,
        "discription": null,
        "images": "[\"http://localhost:4000/images/img1.jpg\",\"http://localhost:4000/images/img2.jpg\",\"http://localhost:4000/images/img3.jpg\",\"http://localhost:4000/images/img4.jpg\", \"http://localhost:4000/images/img5.jpg\"]",
        "available": "not rented",
        "createAt": "2020-12-24T03:02:14.000Z",
        "status": "active",
        "updateAt": "2020-12-24T03:02:14.000Z",
        "id": 14,
        "roomType": "Nhà nguyên căn",
        "area": 300,
        "shared": 1,
        "bathroom": "Khép kín, có nóng lạnh",
        "kitchen": "Chung",
        "airConditioner": 1,
        "nonglanh": 1,
        "balcony": 0,
        "typeCostElectric": 1,
        "electricity": 4000,
        "water": 35000,
        "near_place": "Đại học Luật",
        "other": null,
        "name": "Tuan Son",
        "email": "sontuan@gmail.com",
        "phone": "0567891011",
        "place": "Dong Da - Ha Noi",
        "cmt": "1234567216",
        "password": "12345677",
        "avatar": "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
    },
    {
        "postID": 16,
        "roomID": 15,
        "id_owner": 5,
        "title": "Phòng trọ giá rẻ",
        "address": "Thụy Khuê, Ba Đình, Hà Nội",
        "duration": 7,
        "quantity": 1,
        "price": 5000000,
        "tiencoc": 0,
        "views": 1,
        "like": 1,
        "discription": null,
        "images": "[\"http://localhost:4000/images/img1.jpg\",\"http://localhost:4000/images/img2.jpg\",\"http://localhost:4000/images/img3.jpg\",\"http://localhost:4000/images/img4.jpg\", \"http://localhost:4000/images/img5.jpg\"]",
        "available": "not rented",
        "createAt": "2020-12-24T03:03:52.000Z",
        "status": "pendding",
        "updateAt": "2020-12-24T03:03:52.000Z",
        "id": 15,
        "roomType": "Chung cư mini",
        "area": 30,
        "shared": 0,
        "bathroom": "Khép kín, có nóng lạnh",
        "kitchen": "Riêng",
        "airConditioner": 1,
        "nonglanh": 1,
        "balcony": 1,
        "typeCostElectric": 2,
        "electricity": 3000,
        "water": 30000,
        "near_place": "Đại học Ngoại Thương Hà Nội",
        "other": null,
        "name": "Vuong Son",
        "email": "sonvuong@gmail.com",
        "phone": "0123456785",
        "place": "Hoan Kiem - Ha Noi",
        "cmt": "123456789412",
        "password": "$2b$10$6nOUa6DGywmwrExB3ic/6OcscdJ8HkOd7jkZlQOsboYHMvQOM9T.K",
        "avatar": "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
    },
    {
        "postID": 17,
        "roomID": 17,
        "id_owner": 7,
        "title": "Phòng trọ giá rẻ",
        "address": "Tây Sơn, Đống Đa, Hà Nội",
        "duration": 7,
        "quantity": 1,
        "price": 2500000,
        "tiencoc": 0,
        "views": 1,
        "like": 1,
        "discription": null,
        "images": "[\"http://localhost:4000/images/img1.jpg\",\"http://localhost:4000/images/img2.jpg\",\"http://localhost:4000/images/img3.jpg\",\"http://localhost:4000/images/img4.jpg\", \"http://localhost:4000/images/img5.jpg\"]",
        "available": "not rented",
        "createAt": "2020-12-24T08:17:15.000Z",
        "status": "active",
        "updateAt": "2020-12-24T08:17:15.000Z",
        "id": 17,
        "roomType": "Chung cư nguyên căn",
        "area": 100,
        "shared": 0,
        "bathroom": "Khép kín, có nóng lạnh",
        "kitchen": "Riêng",
        "airConditioner": 1,
        "nonglanh": 1,
        "balcony": 0,
        "typeCostElectric": 1,
        "electricity": 4000,
        "water": 45000,
        "near_place": "Đại học Thủy Lợi",
        "other": null,
        "name": "Le Giang",
        "email": "giangle@gmail.com",
        "phone": "0123456788",
        "place": "Hà Nội",
        "cmt": "1234567893",
        "password": "123456\r\n",
        "avatar": "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
    },
    {
        "postID": 18,
        "roomID": 18,
        "id_owner": 2,
        "title": "Phòng trọ giá rẻ",
        "address": "Lê Văn Hiến, Từ Liêm, Hà Nội",
        "duration": 7,
        "quantity": 1,
        "price": 3000000,
        "tiencoc": 0,
        "views": 1,
        "like": 1,
        "discription": null,
        "images": "[\"http://localhost:4000/images/img1.jpg\",\"http://localhost:4000/images/img2.jpg\",\"http://localhost:4000/images/img3.jpg\",\"http://localhost:4000/images/img4.jpg\", \"http://localhost:4000/images/img5.jpg\"]",
        "available": "not rented",
        "createAt": "2020-12-14T17:35:16.000Z",
        "status": "active",
        "updateAt": "2020-12-14T17:35:16.000Z",
        "id": 18,
        "roomType": "Chung cư nguyên căn",
        "area": 150,
        "shared": 0,
        "bathroom": "Chung, có nóng lạnh",
        "kitchen": "Riêng",
        "airConditioner": 1,
        "nonglanh": 1,
        "balcony": 0,
        "typeCostElectric": 2,
        "electricity": 4000,
        "water": 45000,
        "near_place": "Học viện Tài Chính",
        "other": null,
        "name": "Pham quang",
        "email": "pqthinh@gmail.com",
        "phone": "0987541234",
        "place": "Me Tri Ha- Nam Tu Liem - Ha Noi",
        "cmt": "0987656543213",
        "password": "$2b$10$PLRyKHTB7os995.CUGSWJ.xGKErShguPP5P3r8XjHexhylM4oqM6e",
        "avatar": "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
    },
    {
        "postID": 19,
        "roomID": 19,
        "id_owner": 7,
        "title": "Phòng trọ giá rẻ",
        "address": "Tôn Thất Tùng, Đống Đa, Hà Nội",
        "duration": 7,
        "quantity": 1,
        "price": 4000000,
        "tiencoc": 0,
        "views": 1,
        "like": 1,
        "discription": null,
        "images": "[\"http://localhost:4000/images/img1.jpg\",\"http://localhost:4000/images/img2.jpg\",\"http://localhost:4000/images/img3.jpg\",\"http://localhost:4000/images/img4.jpg\", \"http://localhost:4000/images/img5.jpg\"]",
        "available": "not rented",
        "createAt": "2020-12-24T08:17:15.000Z",
        "status": "active",
        "updateAt": "2020-12-24T08:17:15.000Z",
        "id": 19,
        "roomType": "Nhà nguyên căn",
        "area": 150,
        "shared": 1,
        "bathroom": "Chung, có nóng lạnh",
        "kitchen": "Chung",
        "airConditioner": 1,
        "nonglanh": 1,
        "balcony": 0,
        "typeCostElectric": 1,
        "electricity": 3000,
        "water": 30000,
        "near_place": "Học viện Ngân Hàng",
        "other": null,
        "name": "Le Giang",
        "email": "giangle@gmail.com",
        "phone": "0123456788",
        "place": "Hà Nội",
        "cmt": "1234567893",
        "password": "123456\r\n",
        "avatar": "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
    },
    {
        "postID": 20,
        "roomID": 20,
        "id_owner": 8,
        "title": "Phòng trọ giá rẻ",
        "address": "Hồ Tùng Mậu, Cầu Giấy, Hà Nội",
        "duration": 7,
        "quantity": 1,
        "price": 5500000,
        "tiencoc": 0,
        "views": 1,
        "like": 1,
        "discription": null,
        "images": "[\"http://localhost:4000/images/img1.jpg\",\"http://localhost:4000/images/img2.jpg\",\"http://localhost:4000/images/img3.jpg\",\"http://localhost:4000/images/img4.jpg\", \"http://localhost:4000/images/img5.jpg\"]",
        "available": "not rented",
        "createAt": "2020-12-24T08:17:15.000Z",
        "status": "pendding",
        "updateAt": "2020-12-24T08:17:15.000Z",
        "id": 20,
        "roomType": "Phòng trọ",
        "area": 40,
        "shared": 0,
        "bathroom": "Chung, có nóng lạnh",
        "kitchen": "Chung",
        "airConditioner": 0,
        "nonglanh": 1,
        "balcony": 0,
        "typeCostElectric": 1,
        "electricity": 4000,
        "water": 35000,
        "near_place": "Đại học Thương Mại",
        "other": null,
        "name": "Nguyen Tram",
        "email": "tramnguyen@gmail.com",
        "phone": "0567891012",
        "place": "Bắc Giang",
        "cmt": "1234567219",
        "password": "123456",
        "avatar": "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
    }
]