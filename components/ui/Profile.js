const Profile = ({ dark }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center max-w-screen-sm p-4 mx-auto text-center border rounded border-[#e6e6e6] ${
        dark && "border-white/20"
      }`}
    >
      <img
        src="/img/profile-pic.png"
        alt="Murat Özdemir Profile picture"
        className="relative w-24 rounded-full -top-16"
      />
      <h2 className="-mt-12 text-xl text-white">Murat Özdemir</h2>
      <p className="mt-4 font-light text-gray-400">
        Merhaba Ben Murat. Web geliştirmeyi çok seven, keyif alan ve bu yüzden
        kendini geliştirmek için bu site gibi projeler yapan, bir garip
        developer adayıyım. Geri dönüşler benim için çok önemli, vakit ayırıp
        görüş bildirmek isterseniz dikkate alacağımdan emin olabilirsiniz.
      </p>
      <a
        href="mailto:mrtozdmr92@gmail.com"
        className="px-4 py-2 m-4 font-light text-white transition-all bg-blue-600 rounded hover:bg-blue-500"
      >
        İletişim
      </a>
    </div>
  );
};

export default Profile;
