const form = document.querySelector("form");
const recommendation = document.querySelector("#recommendation");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const emotions = document.querySelector("#emotions").value;
  const genres = document.querySelector("#genres").value;

  let movie = [];

  if (emotions === "fear" && genres === "comedy") {
    movie = [
      "https://i0.wp.com/www.meinstyn.com/wp-content/uploads/2017/01/3-Idiots-Movie-Poster-Aamir-Khan-Kareena-Kapoor-R-Madhavan-Sharman-Joshi-Full-HD-Desktop-Wallpaper.jpg?resize=678%2C381&ssl=1","3 Idiots",
      "https://www.themoviedb.org/t/p/original/2ZkuQXvVhh45uSvkBej4S7Ix1NJ.jpg","Mean Girls",
      "https://wallpapers.com/images/high/bridesmaids-poster-with-quotes-93vdz45uvq8h85hz.webp","Bridesmaid"
    ];
  } else if (emotions === "fear" && genres === "action") {
    movie = [
      "https://images.freekaamaal.com/post_images/1569564358.jpg","War",
      "https://image.tmdb.org/t/p/original/bXU5CRTzyEpuqPPxHwUzcxfEwi0.jpg","John Wick",
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Saj0whOXaK3U1e16fzTSTwHaK-%26pid%3DApi&f=1&ipt=7040001af45fd9f3b317e7327709f024aa48759891ac8031b6029143db61ab8a&ipo=images","Die Hard"
    ];
  } else if (emotions === "fear" && genres === "drama") {
    movie = [
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.3KrgdGvgRbnr7usHv8vO6AHaE-%26pid%3DApi&f=1&ipt=6168ce95329c405ba8a8710bbb455f9c1e64fa5efc87acb2cb3f73452ec6b9cf&ipo=images","DDLJ",
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.H20sGup-FcsAMxezmc8ewQHaK5%26pid%3DApi&f=1&ipt=7da8a2d1fcb9879113202f4d2cdf8e1bcde2cf9becc91c6670255f57dce07f9b&ipo=images","Forrest Gump",
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.movieassets.com%2Fstatic%2Fimages%2Fitems%2Fmovies%2Fposters%2F67290fda6339963993b32b65ec4934c8.jpg&f=1&nofb=1&ipt=00bafd83e56592f29842cf2035699b3e954bf76ee6045e7339467a1b57bbfd6e&ipo=images","The Godfather"
    ];
  } else if (emotions === "fear" && genres === "horror") {
    movie = [
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.OZyMzi0Sdfk2TDWbvbJwPwHaHa%26pid%3DApi&f=1&ipt=dcfb3b3772e24cd38f789fea39c2747c470ffedc0cb8e2616a1b2ada6449e4ca&ipo=images","Raaz",
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.h-BLTeD6vSTupGhDfnhMNAHaKe%26pid%3DApi&f=1&ipt=2f881c9cdf1e5c8638d0cec7b6ded2a8a3fb65a89b168d0dc1ee26d7c1df2a6a&ipo=images","The Exorcist",
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.lMBYuzAhfLQBPtQSLN8gpQHaLH%26pid%3DApi&f=1&ipt=a990402542b6be5e2dd201ad56d032af41a57331b9f63c6b2e5785072c155d34&ipo=images","The Conjuring"
    ];
  } else if (emotions === "fear" && genres === "romantic") {
    movie = [
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.5MkzAMlEl0gTX-bMPynO8gHaJ4%26pid%3DApi&f=1&ipt=77924b2d25dba904ef7d5afce2ea9e9501a82b3fbf743a523028d61fbb3e0d08&ipo=images","Jab We Met",
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.JsL3qDwbFKM_mFmoJYzxxAHaEK%26pid%3DApi&f=1&ipt=be6cb0238be19670a9d20860e8832d6a5fdaee58c7b80fa2293e32a51a0c48cc&ipo=images","The Notebook",
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.pvYWuPXi0Jpw9469VHY1lgHaLH%26pid%3DApi&f=1&ipt=c82853a763c8e80ba5bac871c02173b1bb448b055db1ef8f6b1be3cc4f4223d9&ipo=images","Titanic"
    ];
  } else if (emotions === "anger" && genres === "comedy") {
    movie = [
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.p0hDHa-Gy1ld6fFyTaRZOgHaEK%26pid%3DApi&f=1&ipt=ed373e40df68f081126bfb20cd0c915899c44b38de709d65f39024ec4df33338&ipo=images","Bridesmaid",
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.IEALPyeVX-xCPzDIZbQq4wHaEK%26pid%3DApi&f=1&ipt=48b7c77496b8ef70b023e92c327488bbf07b59615796814efad9c646fea3a47a&ipo=images","The Hangover",
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.RhBeRlhBGGkt7Hcy6gDo3wHaK-%26pid%3DApi&f=1&ipt=0b9833cee361fd2e901deae9ac6425a57819424394cd5325e3b45088608ad848&ipo=images","The Heat"
    ];
  } else if (emotions === "anger" && genres === "action") {
    movie = [
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.m-A6mcdOJ35dz7v4P77SOgHaJ4%26pid%3DApi&f=1&ipt=a0dcac1dcfa470605a99ff47b8ab3585d930c7fc7de30156c36c479c7bce614d&ipo=images","John Wick",
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.NWFTEyFm3rGzqAjdmXmVMAHaEK%26pid%3DApi&f=1&ipt=b8b5fa10f7e193e3af1f6ffb330dc9a95a6642ae56f657a87c02481896968a46&ipo=images","Madmax",
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.explicit.bing.net%2Fth%3Fid%3DOIP.LO4F4pjkJjlhuh6sfZyPEgHaJ4%26pid%3DApi&f=1&ipt=fb00cbe1d7c84e4534e676a7ecca19f4808883b0a7ac5b40882d09102350b96d&ipo=images","Taken"
    ];
  } else if (emotions === "anger" && genres === "drama") {
    movie = [
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.7F9U4ZBclcJuGFX35Um0lQHaEK%26pid%3DApi&f=1&ipt=eabf300e00da688374f8ada264b61f14219fdd39d9b6ad9ee94aa143a1a514f1&ipo=images","God Will Hunting",
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.hS0vaiyHNJPRP-5YQ_q4FwHaK7%26pid%3DApi&f=1&ipt=a4250166137e4eda5b914af8e4e27e59617d392af4a9637565fea7f7da4bba17&ipo=images","The Shawshank Redemption",
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.0VN3D-NlyUGYTjjl-9G7hwHaHa%26pid%3DApi&f=1&ipt=7e1e416f4218bdabe9ef8c56c37ddf43994e66e2a85b9279e19582e9ff7f19e3&ipo=images","A Star is Born"
    ];
  } else if (emotions === "anger" && genres === "horror") {
    movie = [
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.UcA99vji8hrCd2MU6i5QnwAAAA%26pid%3DApi&f=1&ipt=953f4e16962057a7148bd35dcfff97de7acc681bfdbbc9d50fe31c0b7e678b8d&ipo=images","Raat",
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Y4EGeMqJcdptMk7Du5QpoAHaLH%26pid%3DApi&f=1&ipt=24102ab3f7033e0b8d35a604b238c258c90f78c8c1b1781b517e0fe51ba3b9e8&ipo=images","The Shining",
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.rwsIKCRk18a8k0dHlXjmfQHaDt%26pid%3DApi&f=1&ipt=dcf31605fcbf5c7038d858a2ff3037ed7ce13dfc51092c0428355d37d22f6b54&ipo=images","Get Out"
    ];
  } else if (emotions === "anger" && genres === "romantic") {
    movie = [
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.uL7p1IhZKD9NpDAP7GXTVgHaKF%26pid%3DApi&f=1&ipt=d6427a5df419ccd127ea6c96ffe2bb4e6e20c3cacc4e6de2d5b1674f32547ecf&ipo=images","Dil Chahata Hai",
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.tGvsAWZTzvoX0yqnnS-7MQHaEK%26pid%3DApi&f=1&ipt=ffa6812d61f6eb712a68fd7c9df361218d24547ac0540747f4b89f052481df21&ipo=images","La La Land",
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.Tm8nWJE1NHA_ZY9P4fAB-wHaE_%26pid%3DApi&f=1&ipt=31d1e9954ea73b98ce740d27d0c14d31a9531e93dcc26ec03e5eae349b529bca&ipo=images","The Fault in our stars"
    ];
  } else if (emotions === "joy" && genres === "comedy") {
    movie = [
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.SJD9yJaJUtGZt2W0ZdqpyAHaEK%26pid%3DApi&f=1&ipt=75c70ec7492181e4cef960bb8ce6e9318749e4efb9cf000fc4a8866a0702f879&ipo=images","Hera Pheri",
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.qWPe0TZm8fY8S84DSUh4BwHaEK%26pid%3DApi&f=1&ipt=1963dac4be1df27d3fab3f0f1e42ca52a4802b572bd0488f4c151cd1ce6c69a6&ipo=images","This is the End",
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.Nhzd_BRTosI9GREyH2nugQEsEs%26pid%3DApi&f=1&ipt=c46e35f890bb955c7d9a38f96bb0b48472414d6443a9562e084ce66e71cd840c&ipo=images","The 40 Year Old virgin"
    ];
  } else if (emotions === "joy" && genres === "action") {
    movie = [
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.mrSpHLINg8qqv-lYGulcTAHaEK%26pid%3DApi&f=1&ipt=441a46de28ee3e56f5b02e8092824a7ccfb618b15cb5ad160aeb5c6e35314694&ipo=images","Dhoom 2",
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.2MkZB7HQ-A7IoD1fP9W9tQHaEL%26pid%3DApi&f=1&ipt=1216bcb61974aaf65c922659195e344e13e8e777466d8a9e84d1f992b3967ecc&ipo=images","Bad Boys for Life",
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.LNI64-Izkr5mK5wBosMQuQHaLH%26pid%3DApi&f=1&ipt=7c5b64f89c3a648b756b79c338b481b7d8132c5d6edb72f2dfa1777d4ef9483d&ipo=images","The Fast And Furious"
    ];
  } else if (emotions === "joy" && genres === "drama") {
    movie = [
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.evkeRMEtua6iXD91thU1mwHaKN%26pid%3DApi&f=1&ipt=fb5de9e6473ebec9771cdc0df727e6abb9821790255cb13a14c7860ccf7f52fc&ipo=images","Taare Jameen Par",
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.6HO-cQbyKLuED7amm4fM7AHaEK%26pid%3DApi&f=1&ipt=4fa0ea34ecba59a2e46a65c07bd399d7ef4aede98e1853ee9b2410a9db0c41b9&ipo=images","The Pursuit of Happyness",
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.LL8Fzr34CsXX1LhxbmevKwHaLH%26pid%3DApi&f=1&ipt=d6659cef99f1d2cae1a1657d578a7cfbc1cfe02b8c59c085fab7b0c942ceb4b4&ipo=images","Little Women"
    ];
  } else if (emotions === "joy" && genres === "horror") {
    movie = [
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.IswO0bfB7Kt6oAWR8NM-9AHaKs%26pid%3DApi&f=1&ipt=c811dc7e0285b9e1bd6b5a7b76e1e21f7586a4f664f50edc24ba0b9e5ca1dedb&ipo=images","Go Goa Gone",
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.UcLhj7w1LpB0wtr76t-_VwHaLH%26pid%3DApi&f=1&ipt=bc58570ca37b34973213668b72a324238218ce1301b51292884e47fa5b854468&ipo=images","Dawn Of the Dead",
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.xGyAK_3uB2e27Gr_y-yvQQHaEK%26pid%3DApi&f=1&ipt=66c97167680b561dd7cd59057f2c004922c5e3a520be63c3e10cce49e81c7616&ipo=images","Zombieland"
  ];
  } else if (emotions === "joy" && genres === "romatic") {
    movie = [
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.hLMj3eKCDF8s5tIP3oaSeQHaLH%26pid%3DApi&f=1&ipt=432ef1a097253aa9edf31a7cee8eec8d59c999662745be8f8c58c5020a6cf086&ipo=images","Kabhi Khushi Kabhi Gham",
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.QehQlN1JvI4xbjghiliMXQHaKa%26pid%3DApi&f=1&ipt=27b1da933331b4a702ca58fbe29714f6487902685f3575aa7d1728630763d2e2&ipo=images","When Harry Met Sally",
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.LeOqSyIQ69M5Va4QfxowWAHaK-%26pid%3DApi&f=1&ipt=efe5ff42b572958bb8d694ce732ac4c009ee6d2f773a12755bd5c45277cdbe72&ipo=images","Crazy Rich Asians"
    ];
  } else if (emotions === "sad" && genres === "comedy") {
    movie = [
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.rGty1Xu-VXihfPZzu3AwGQHaFj%26pid%3DApi&f=1&ipt=93f24e7eacd9df041961c2fb77de854866c2c7320c42255950f2cd39cccf0d83&ipo=images","Chup Chup Ke",
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.O3gdbtprGzS_4mQbr6WImwHaLH%26pid%3DApi&f=1&ipt=5043ff042dc10d00e3c974fdf0893c1b7bb9206c23fd76e36b920c3a2e800d5e&ipo=images","Superbad",
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.bOrOqtpdDo-3plR2IChFqQHaK-%26pid%3DApi&f=1&ipt=70ed325da4bed14546f6b48d8efda86fcc012fddef791f1afa744f84d4589724&ipo=images","This is the end"
    ];
  } else if (emotions === "sad" && genres === "action") {
    movie = [ "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.y2KIijfN0FO6pKAHCq_0swHaKr%26pid%3DApi&f=1&ipt=e84b0e33df853378fe5ba9ad19e711bf764cb552c38f79a85b957ad632f4f8d9&ipo=images","Baaghi 2",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.NN9rKH-vZbFgtH4FuoW7OwHaLH%26pid%3DApi&f=1&ipt=6fe6ca1992783f41c11bbf264edc5f4c3250875b4b94d1683ea8198bf945d7a7&ipo=images","The Dark Knight",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.AQEf_JThhePAi6_ShKsp7wHaJ4%26pid%3DApi&f=1&ipt=294d54037edfaec1fdc388a8f57bd6c942a270e0924ec725aa6f346c9875aadb&ipo=images","Mission Impossible"];
  } else if (emotions === "sad" && genres === "drama") {
    movie = ["https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.44I-65Q0ac7CSDs-p8dPbgHaJ4%26pid%3DApi&f=1&ipt=f067d69841fc5375906a4b2259390e9c33c347e505203d6245234dde3818658b&ipo=images","Anand",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.zscEcKp8w3KkAJCBYgfjCgHaJy%26pid%3DApi&f=1&ipt=c520a37df31aea33edd156d4d8b8b6c68b4e14c34fce1e658d752970c00fb3b8&ipo=images","Forrest Gump",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.lNKLZaDDdZqvuh9WjdKVPwHaHZ%26pid%3DApi&f=1&ipt=e511328c1e982e550faeb6efbc56d99c691d9e348f86e952210271c8ff0cd19b&ipo=images","Pursuit of Happyness"];
  } else if (emotions === "sad" && genres === "horror") {
    movie = ["https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.hBOG4ET3fLVHJ3mU2sqH1wHaD8%26pid%3DApi&f=1&ipt=b66e395e31c2670044d4168ea3a5ad9099b737e68ef8c68e4cb49f636aa44532&ipo=images","Bhoot",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.y0VmxlHPdchti0CaRLrFNQHaK-%26pid%3DApi&f=1&ipt=cf39890e6b10bfc24ef412dc3c809f954325ade65fa1a672ed4b6136a5f8e08b&ipo=images","Hereditary",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.NY-DgWi1htMmFl5O2gTpHQHaLH%26pid%3DApi&f=1&ipt=2a03d4449a6bf7ee0ed4b7944ec91cf2126b101715f289b49ac20930e099336c&ipo=images","Witch"];
  } else if (emotions === "sad" && genres === "romantic") {
    movie = ["https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.dI8uf5Xx8i49ejFEBq_NywHaKl%26pid%3DApi&f=1&ipt=a5bb96d4bc216c272ad00c539daae8f946b8fe401c1c2ffdd20a3dde5470d698&ipo=images","Kal Ho na Ho",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.explicit.bing.net%2Fth%3Fid%3DOIP.r1VPlaOebOVDvBV0rFQtEgHaKj%26pid%3DApi&f=1&ipt=c1d04ede4776b1fbe8c1a7feb4a083f357cceb0996963287afb3a31c9a4750d1&ipo=images","A Walk to Remember",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.SdcmSGzsBZN5yogbxWqqLgHaHa%26pid%3DApi&f=1&ipt=d45f847f8497565a90c0d052fb055e648706217ba3e45ddf53e1751a3770b73b&ipo=images","The Notebook"];
  } else if (emotions === "relaxed" && genres === "comedy") {
    movie = ["https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.peyFrALpEBPdW1ULLbYwSwHaJ4%26pid%3DApi&f=1&ipt=af9b1564a6220f21182ee78a151658b3ef1a4081e9eac5232ebc009a32576856&ipo=images","Welcome",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.vlmIpUsNb3dKbH6bf_2XvAHaHa%26pid%3DApi&f=1&ipt=3a1f6bf6d9441f8585f948d72fdc2c7c3f33b2b320aa4f263aa7a75c94f00157&ipo=images","21 jump street",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.XUOO4F7VA2jWQzRqhdHoawHaJ4%26pid%3DApi&f=1&ipt=daa7c0f859aac4083bcbb108d80fa0696aaf37ffc9157a0dc7d8959020ba1165&ipo=images","The Hangover"];
  } else if (emotions === "relaxed" && genres === "action") {
    movie = ["https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.KzOgmgqtsyys3Wd4cVq1jAHaE8%26pid%3DApi&f=1&ipt=e498c04ebe85953930bdafccbab9b5f931183b110c592e038fb812b0535baa1f&ipo=images","Singham",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.mCr3x90hubrByxx2xp21EwHaLH%26pid%3DApi&f=1&ipt=57e824510af36b8d3702e383701efbdac44f4652cd23a4f067d797c364a77e82&ipo=images","The Matrix",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.FSzTPLfYkUtTRshkZlmMRwHaLH%26pid%3DApi&f=1&ipt=483cb520f16a389161e3dea34d17e13d3d1e424223688835a6a037bbefb047cd&ipo=images","The Bourne Identity"];
  } else if (emotions === "relaxed" && genres === "drama") {
    movie = ["https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.G48FmvffxiF-Ey2IDKrcDAHaLH%26pid%3DApi&f=1&ipt=ff68bf73b22f7110915ffac662f5c67cc8e11d89b4f3ecd1882f46ab329a0072&ipo=images","Lagaan",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.Ii_4K2n2Z88Nr4xsYZAeGgHaFj%26pid%3DApi&f=1&ipt=507a7be2a503d29facb347f5badf92a902a59b36dbfa4c3e7486374c33808882&ipo=images","The Green Mile",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.hPB37rg1hWAHfTT9sSM7UQHaKq%26pid%3DApi&f=1&ipt=923556605dabde5c05a9041faf0e616f231f100113007116d0061cc4949cf3ac&ipo=images","The Heap"];
  } else if (emotions === "relaxed" && genres === "horror") {
    movie = ["https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.SkNsbhJj8DMSmmVxnglSWwHaOG%26pid%3DApi&f=1&ipt=59fe679089d4e1ee0f9446f60a5280cd38ba85d582fb1bf34ad0965f17336fec&ipo=images","1920",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.4Cgp731Cos2gFbCbYZHvKQHaLH%26pid%3DApi&f=1&ipt=2f4fdf52d2441b361bc657679c55428b0d67e38e73ea1037c9865ea9ebcc9b4d&ipo=images","The Quite Place",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.7i1EZF86_dRKjProar7g3wHaFj%26pid%3DApi&f=1&ipt=fc1029687beb4b559ce5443db88bc17bce92d29d555c6eb89c3dfdfe67dd46e3&ipo=images","The Babadook"];
  } else if (emotions === "relaxed" && genres === "romantic") {
    movie = ["https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIF.epyIahNrrjTI0G8ScLXk4A%26pid%3DApi&f=1&ipt=df12dc4f5291e7e66c93b35a0cbf35034ad21bd7db29280f33e5054f42695069&ipo=images","Yeh Jawani Hai Deewaani",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.dXI-AlgueWiqN7jdrFuOiwHaLH%26pid%3DApi&f=1&ipt=d44ccf36e6bcc9dd5b1010061b6884ae1de97211e3652deb559b6ecc71032ee7&ipo=images","Silver Linings Playbook",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.MZKoYQ8GW4fuhlzCYvAMeAHaJ4%26pid%3DApi&f=1&ipt=c9ae87fb42d9b5bdd46c1d142c298c98a926df108e9ef9ac34e17286f498e8aa&ipo=images","Pretty Women"];
  } else if (emotions === "disgust" && genres === "comedy") {
    movie = ["https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.F4crtdOmC05RXoFaDTJE9wHaHc%26pid%3DApi&f=1&ipt=a4b229e06933aed5621604d3576251bd35041e7c825d1202d8b896d557021dee&ipo=images","Golmaal",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.jc4Z4BPH5C4V-SINhDoI-AHaLH%26pid%3DApi&f=1&ipt=1dc37b097210f8067852b1f74f31869ac6f0f26f84e30348000bff0f3a89632b&ipo=images","Coming To America",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.explicit.bing.net%2Fth%3Fid%3DOIP.N5NRyNUQxy6-ihpA4qoU8AHaLH%26pid%3DApi&f=1&ipt=56f1c413cf934ece5d067791f6aaaa0524edc53a518b131d81cd05e3ae8d5150&ipo=images","The dicktator"];
  } else if (emotions === "disgust" && genres === "action") {
    movie = ["https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.MMpKmvdli7l_2FBBTcU_jwHaKu%26pid%3DApi&f=1&ipt=663779c5a7a44f2b9b12535e568e32e5cf987ae9de2ec3caa45ea800f604ab2c&ipo=images","Krish 3",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.qaRlji_FvOP8MPnFyidQAgHaJ4%26pid%3DApi&f=1&ipt=c0757bb4cad306c71d5a409529a20b90bf60f3fcda642fcf2debe8fe646f29e5&ipo=images","Bang Bang",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.Pilc_SMX4fYwo9E8WucXJgHaLH%26pid%3DApi&f=1&ipt=4e1dea74dd908bc9e66de4cdc79e16fb0d2eac1fe3d7d1e68abb101658ee60f6&ipo=images","Terminator"];
  } else if (emotions === "disgust" && genres === "drama") {
    movie = ["https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.gDUvtCoI_nYrJUx8g3f69AHaND%26pid%3DApi&f=1&ipt=1ef5281b136d2a38f26cfd274863356f0d6e63cd3d81dc423f0aa0956835f516&ipo=images","Zindagi Na milegi Dobara",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.nlOcKKTBvenBNMyAukAV8AHaFj%26pid%3DApi&f=1&ipt=28b273407138463e2f8c503702add1833544d0cf1d3692f6a40afa5ecbbca7df&ipo=images","The Star Is Born",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.sicDYl4kWVx73qE1vrqrFAHaKj%26pid%3DApi&f=1&ipt=737b6ed8253baed237031483079d816489863d4bbe9090a203bc9510b0745249&ipo=images","The Godfather"];
  } else if (emotions === "disgust" && genres === "horror") {
    movie = ["https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.VqS3c4VraNo7vpPSd4JzVAHaKk%26pid%3DApi&f=1&ipt=ce9afaf4e3dfd83ca0c910e5fe6a45bb4681776fca40efabcaf01777968fc267&ipo=images","Tumbadd",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.zj1oEdqZmnFqT3bteV-oMgHaKY%26pid%3DApi&f=1&ipt=3bec3db15f92f269d7ce9bc692a895d654490a0166532e7412824676f782408b&ipo=images","The Nun",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.vPQmUL3MrfO2_j0JJh1JRwAAAA%26pid%3DApi&f=1&ipt=26dd8909eb30f2ddf3da5fb53488c5d207fed7bbd404be255910e1626d22be12&ipo=images","13 B"];
  } else if (emotions === "disgust" && genres === "romantic") {
    movie = ["https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.vp7i5flacvGbIV-QQnKqhAAAAA%26pid%3DApi&f=1&ipt=c0b08bca4859f9b70c5cbc305390c15af8c58b48a9c7eb9d98b32c70902d2943&ipo=images","Veer Jaara",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.KVmUztSIjqQse-kVNWVTtwHaEU%26pid%3DApi&f=1&ipt=bb93575b27e8fa3cfc07b8c485281f0a3d0d4400b67a8e9649122a31402e7cf7&ipo=images","The Before Trilogy",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.yygVMmFSQpJRuvB41gpc_gHaDN%26pid%3DApi&f=1&ipt=49b7a3af4b5d85d5bde9029e2615221aac3bf5071748f4ce29edc1623a351b35&ipo=images","Before Sunrise"];
  }  else if (emotions === "surprise" && genres === "comedy") {
    movie = ["https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.QE86btscIYot_F9weGmVHAHaJ9%26pid%3DApi&f=1&ipt=23143d039a72ab3a8dd7f392e83b956edc57287bef504d1c7c4b316550d523e0&ipo=images","Andaaz Apna Apna",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.fRasNPp7LUEDIq7wRNOh4AHaKj%26pid%3DApi&f=1&ipt=9861b7ae58651b9354e1df18fe997b9df5e7b13ade4a841be71618d2a476d411&ipo=images","The Grand Budapest Hotel",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.SqVW6za-wkqq1zqscnBr3gHaLH%26pid%3DApi&f=1&ipt=26cd5b2c3f0b841b39a8f702866299547d90199d414b0df8b46270203b0b154d&ipo=images","Burgundy"];
  } else if (emotions === "surprise" && genres === "action") {
    movie = ["https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.dSplgFRKVJjFAqODc_x1agHaHa%26pid%3DApi&f=1&ipt=2ddf565058d0cae1476bca62d5ea706ddf3ab5ec350dbcb499da8c54d72758a9&ipo=images","Dhoom 3",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.3Zgn-7AZnNIGlHOdVMNG2AHaK-%26pid%3DApi&f=1&ipt=cef05355c21a9213b18ad912843b9e09954200e25f46d47c3d1ec0e1fdf6dd44&ipo=images","The Inception",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.gbMJtCNw8QKH7bU8DdlsvQHaLH%26pid%3DApi&f=1&ipt=5d090f2b0e832c5c6cc3671c7e32d0efd4a4efe42873d8911d287be4e0b3bd1e&ipo=images","The Avengers"];
  } else if (emotions === "surprise" && genres === "drama") {
    movie = ["https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.7LxlukkKH7A6EgKz9R5RoQHaJ4%26pid%3DApi&f=1&ipt=97d6f7626f142852b04ebf2b3975528c22754130b3120198337e839cd7e2b7f5&ipo=images","Andhadhun",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.CqEgrLUWVZn6c2wgbTwtGgHaLH%26pid%3DApi&f=1&ipt=d5e43e07a7bbea36116b83b8c925045dff80fdfe6549641ac1fb0a25f7ad2b68&ipo=images","The Prestige",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.9X6msnpv4vmCJ2Zv-L2OrgHaK_%26pid%3DApi&f=1&ipt=69036faed2fec8516cc43a0fed880d9d79147a78563c24f465919fe09008c151&ipo=images","Once Upon a Time in Hollywood"];
  } else if (emotions === "surprise" && genres === "horror") {
    movie = ["https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.VqS3c4VraNo7vpPSd4JzVAHaKk%26pid%3DApi&f=1&ipt=ce9afaf4e3dfd83ca0c910e5fe6a45bb4681776fca40efabcaf01777968fc267&ipo=images","Tumbadd",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.K6ELjERZi-YzQGztjCSS9wHaKP%26pid%3DApi&f=1&ipt=6a0a63ee0e252f6262a93668889c7b29b1e9ee22f847d901852cce19e9233d20&ipo=images","The Others",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.qOvln1F_6kslUE9l6H8PVwHaKl%26pid%3DApi&f=1&ipt=e715577f7d528b5cf9e1969234b746e1a83f0cc87c47be75e98dce27d32f40ad&ipo=images","Annabelle"];
  } else if (emotions === "surprise" && genres === "romantic") {
    movie = ["https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.EaaE2PiysCroAsxPskMv1gHaKc%26pid%3DApi&f=1&ipt=cb6d4396bd0a07eda7c01b2d64c95f3722b3a092e6f5c9b9675ab52b4e7ac78c&ipo=images","Tamasha",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.ozBaFsZG9_gdqaYASNOMngHaLH%26pid%3DApi&f=1&ipt=e9a2594057af094b06011a22aa84134fe7bbfde054d72136f750d959b7d4b74f&ipo=images","Eternal Sunshine of the spotless mind",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.ZPSEU5jyVUcvksF5yLriEgHaJ4%26pid%3DApi&f=1&ipt=62eea773ad46659b3caf3db80e432758c28e4d43a89f8913aa3d300226b2a044&ipo=images","Before Sunrise"];
  }


  recommendation.innerHTML = `<br>
  <div class="container">
  <div class="row">
    <div class="col-lg-12">
      <div class="row">
        <div class="col-lg-4 col-sm-6">
          <div style="border-radius: 15px; background-color: grey; padding:10px; margin:10px; text-align:Center">
          <img height=250px width=100px src=${movie[0]}><br><br>
          <h4>${movie[1]}</h4>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6">
          <div style="border-radius: 15px; background-color: grey; padding:10px; margin:10px; text-align:Center">
          <img height=250px width=100px src=${movie[2]}><br><br>
          <h4>${movie[3]}</h4>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6">
          <div style="border-radius: 15px; background-color: grey; padding:10px; margin:10px; text-align:Center">
          <img height=250px width=100px src=${movie[4]}><br><br>       
          <h4>${movie[5]}</h4>
          </div>
        </div>
    </div>
  </div>
</div>`;
});




