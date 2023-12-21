import { useRouteMatch } from "react-router-dom";
import React, { useMemo } from "react";
import { useClient } from "../../components/client";
import { Navigation, RootProvider } from "./hoc";
import Router from "./Router";

import AdminDashboard from "../Admin.Dashboard";
import UserDashboard from "../User.Dashboard";
import About from "../About";
import Artikel from "../Artikel";
import Artikel1 from "../Artikel1";
import Artikel2 from "../Artikel2";
import Artikel3 from "../Artikel3";
import Artikel4 from "../Artikel4";
import Artikel5 from "../Artikel5";
import Artikel6 from "../Artikel6";
import Galeri from "../Galeri";
import Video from "../Video";
import Akun from "../Akun";
import EditAkun from "../EditAkun";
import Riwayat from "../Riwayat1"
import PanduanPesan from "../PanduanPesan"
import Booking from "../Booking"
import BookingPages from "../BookingPages"
import BookingForm2 from "../BookingForm2";
import BookingForm3 from "../BookingForm3";
import Riwayat2 from "../Riwayat2";
import Sejarah from "../Sejarah"
import VisiMisi from "../VisiMisi"
import Ulasan from "../Ulasan";
import Riwayat1 from "../Riwayat1";
import Riwayat3 from "../Riwayat3"
import Riwayat4 from "../Riwayat4"
import Riwayat5 from "../Riwayat5"
import Riwayat6 from "../Riwayat6";

const navigation = [
  {
    "title": "Dashboard Admin",
    "component": AdminDashboard,
    "path": "/admin",
    "permission": "admin",
    "exact": true,
  },
  {
    "title": "Dashboard User",
    "component": UserDashboard,
    "path": "/user",
    "permission": "user",
    "exact": true,
  },
  {
    "title": "PanduanPesan User",
    "component": PanduanPesan,
    "path": "/panduan",
    "permission": "user",
  },
  {
    "title": "Booking User",
    "component": BookingPages,
    "path": "/booking",
    "permission": "user",
  },
  {
    "title": "About User",
    "component": About,
    "path": "/about",
    "permission": "user",
  },
  {
    "title": "Artikel User",
    "component": Artikel,
    "path": "/artikel",
    "permission": "user",
  },
  {
    "title": "Artikel User",
    "component": Artikel1,
    "path": "/artikel1",
    "permission": "user",
  },
  {
    "title": "Artikel User",
    "component": Artikel2,
    "path": "/artikel2",
    "permission": "user",
  },
  {
    "title": "Artikel User",
    "component": Artikel3,
    "path": "/artikel3",
    "permission": "user",
  },
  {
    "title": "Artikel 4 User",
    "component": Artikel4,
    "path": "/artikel4",
    "permission": "user",
  },
  {
    "title": "Artikel 5 User",
    "component": Artikel5,
    "path": "/artikel5",
    "permission": "user",
  },
  {
    "title": "Artikel 6 User",
    "component": Artikel6,
    "path": "/artikel6",
    "permission": "user",
  },
  {
    "title": "Galeri User",
    "component": Galeri,
    "path": "/galeri",
    "permission": "user",
  },
  {
    "title": "Video User",
    "component": Video,
    "path": "/video",
    "permission": "user",
  },
  {
    "title": "Akun User",
    "component": Akun,
    "path": "/akun",
    "permission": "user",
  },
  {
    "title": "Edit Akun User",
    "component": EditAkun,
    "path": "/editakun",
    "permission": "user",
  },
  {
    "title": "Riwayat User",
    "component": Riwayat,
    "path": "/riwayat",
    "permission": "user",
  },
  {
    "title": "Riwayat User",
    "component": Riwayat1,
    "path": "/riwayat1",
    "permission": "user",
  },

  {
    "title": "Booking Form User",
    "component": Booking,
    "path": "/bookingform",
    "permission": "user",
  },
  {
    "title": "Booking Form 2 User",
    "component": BookingForm2,
    "path": "/bookingform2",
    "permission": "user",
  },
  {
    "title": "Booking Selesai User",
    "component": BookingForm3,
    "path": "/bookingform3",
    "permission": "user",
  },
  {
    "title": "Riwayat 2 User",
    "component": Riwayat2,
    "path": "/riwayat2",
    "permission": "user",
  },
  {
    "title": "Sejarah User",
    "component": Sejarah,
    "path": "/sejarah",
    "permission": "user",
  },
  {
    "title": "Visi Misi User",
    "component": VisiMisi,
    "path": "/visimisi",
    "permission": "user",
  },
  {
    "title": "Ulasan User",
    "component": Ulasan,
    "path": "/ulasan",
    "permission": "user",
  },
  {
    "title": "Riwayat 3 User",
    "component": Riwayat3,
    "path": "/riwayat3",
    "permission": "user",
  },
  {
    "title": "Riwayat 4 User",
    "component": Riwayat4,
    "path": "/riwayat4",
    "permission": "user",
  },
  {
    "title": "Riwayat 5 User",
    "component": Riwayat5,
    "path": "/riwayat5",
    "permission": "user",
  },
  {
    "title": "Riwayat 6 User",
    "component": Riwayat6,
    "path": "/riwayat6",
    "permission": "user",
  },
]

const Root = () => {
  const {path} = useRouteMatch()
  const client = useClient()

  const items = useMemo(() => {
    return navigation.filter((({permission}) => {
      return permission ? permission === client.role : true

    }))
  }, [client.role])

  return(
    <RootProvider>
      <Navigation base={path} navigation={items} user={client.user}>
        <Router />
      </Navigation>
    </RootProvider>
  )

}

export default Root