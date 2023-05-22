export const getAllHoaDon = async (pageNo) => {
  const response = await fetch(
    `http://kl-env.eba-eyz5qutv.ap-southeast-1.elasticbeanstalk.com/nhan-vien/hoa-don?pageNo=${pageNo}`
  );
  if (response.status === 204) return [];
  const data = await response.json();

  return data;
};
export const getChiTietHoaDon = async (maHoaDon) => {
  const response = await fetch(
    `http://kl-env.eba-eyz5qutv.ap-southeast-1.elasticbeanstalk.com/nhan-vien/hoa-don/${maHoaDon}`
  );
  if (response.status === 204) return {};
  const data = await response.json();

  return data;
};
