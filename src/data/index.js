import DashboardIcon from "../../public/images/dashboard.svg";
import EditIcon from "../../public/images/edit.svg";
import GroupIcon from "../../public/images/group.svg";
import HourglassIcon from "../../public/images/hourglass_empty.svg";
import AddPhotoIcon from "../../public/images/add_a_photo.svg";
import DeleteIcon from "../../public/images/delete.svg";
import SubscriptionIcon from "../../public/images/subscriptions.svg";
import FilePresentIcon from "../../public/images/file_present.svg";
import AlarmIcon from "../../public/images/alarm.svg";

export const navigationItem = [
  {
    id: 0,
    subitem: [
      { id: 0, title: "Dashboard", Icon: DashboardIcon, link: "/" },
      { id: 1, title: "Item 1", Icon: EditIcon, link: "/item1" },
      { id: 2, title: "Item 2", Icon: GroupIcon, link: "/item2" },
      { id: 3, title: "Item 3", Icon: HourglassIcon, link: "/item3" },
    ],
  },
  {
    id: 1,
    description: "OTHERS 1",
    subitem: [
      { id: 4, title: "Item 4", Icon: AddPhotoIcon, link: "/item4" },
      { id: 5, title: "Item 5", Icon: DeleteIcon, link: "/item5" },
    ],
  },
  {
    id: 2,
    description: "OTHERS 2",
    subitem: [
      { id: 6, title: "Item 6", Icon: SubscriptionIcon, link: "/item6" },
      { id: 7, title: "Item 7", Icon: FilePresentIcon, link: "/item7" },
      { id: 8, title: "Item 8", Icon: AlarmIcon, link: "/item8" },
    ],
  },
];

export const duration = [
  { id: 0, title: "1 Day" },
  { id: 1, title: "3 Days" },
  { id: 2, title: "7 Days" },
  { id: 3, title: "30 Days" },
  { id: 4, title: "All Time" },
  { id: 5, title: "Custom Date" },
];
