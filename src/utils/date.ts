import { formatDistance, format } from "date-fns";
import { ja } from "date-fns/locale";

export const distanceTime = (date: string) => {
  let time = formatDistance(new Date(), Date.parse(date), {
    locale: ja,
  });

  if (time.indexOf("未満") !== -1) {
    time = "たった今";
  } else if (time.indexOf("か月") !== -1 || time.indexOf("年") !== -1) {
    time = format(Date.parse(date), "yyyy年M月d日", {
      locale: ja,
    });
  } else {
    time = `${time.replace("約", "")}前`;
  }

  return time;
};
