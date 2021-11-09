import {Shirt, Shirt1, Shirt3, Shirt3Back} from '../../assets';

export const dummyOrders = [
  {
    id: 1,
    tanggalPemesanan: '20 June 2021',
    status: 'keranjang',
    totalHarga: 336000,
    berat: 0.75,
    orders: [
      {
        id: 1,
        product: {
          id: 3,
          title: 'Shirt Short Neck',
          nama: 'Polo Shirt Short Neck Black - Cotton',
          gambar: [Shirt3, Shirt3Back],
          catalog: {
            id: 1,
            nama: 'Shirt',
            gambar: Shirt,
          },
          harga: 100000,
          berat: 0.25,
          jenis: 'Cotton Carded',
          ukuran: ['S', 'M', 'L', 'XL', 'XXL'],
          ready: true,
        },
        jumlahPesan: 2,
        totalHarga: 200000,
        keterangan: null,
        ukuran: 'L',
      },
      {
        id: 2,
        product: {
          id: 1,
          title: 'Long Sleeve Black',
          nama: 'Long Sleeve Black Shirt Clothing | New Original',
          gambar: [Shirt1],
          catalog: {
            id: 1,
            nama: 'Shirt',
            gambar: Shirt,
          },
          harga: 136000,
          berat: 0.25,
          jenis: 'Cotton Carded',
          ukuran: ['S', 'M', 'L', 'XL', 'XXL'],
          ready: true,
        },
        jumlahPesan: 1,
        totalHarga: 136000,
        keterangan: null,
        ukuran: 'L',
      },
    ],
  },
];
