export const lichSuNhapThuoc = async (id) => {
  const response = await fetch(
    `http://kl-env.eba-eyz5qutv.ap-southeast-1.elasticbeanstalk.com/quan-ly/thuoc-va-loai-thuoc/thuoc/${id}/lich-su-nhap-thuoc`
  );
  if (response.status === 204) return [];
  const data = await response.json();

  return data;
};
