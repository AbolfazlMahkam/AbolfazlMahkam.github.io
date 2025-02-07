import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="bg-black">
      <div className="flex justify-center items-center w-full h-dvh background max-[1100px]:p-5">
        <div className="p-10 bg-black backdrop-blur-md bg-opacity-30 rounded-[60px] border border-gray-600 flex flex-col justify-center items-center animation shadow-2xl shadow-black max-[1100px]:h-full max-[1100px]:justify-between">
          <div className="border-2 rounded-full p-2 hover:p-3 duration-300 animation">
            <img className="w-40 h-40 rounded-full" src="/img/me.jpg" />
          </div>
          <div className="text-center pt-10">
            <h1 className="text-3xl font-bold  text-[#16B6BB] mb-5 animation2">
              Abolfazl Mahkam
            </h1>

            <p className="text-white">Front-End Developer</p>
            <p className="text-white">Computer engineering student</p>
            <p className="text-white">Qom, Islamic Republic of Iran</p>
          </div>

          <div>
            <a
              href="https://resume.abolfazl-mahkam.ir/"
              className="flex justify-center items-center mt-10 px-5 py-3 duration-300 rounded-lg shadowHover"
            >
              <span className="text-[#EC3710] font-semibold text-lg">
                Resume
              </span>
            </a>
          </div>

          <div>
            <div className="pt-10">
              <span className="social-media-buttons">
                <a
                  className="dokme"
                  href="https://instagram.com/a.mahkam.950"
                  target="_blank"
                >
                  <span className="social-media-button insta">
                    <img alt="Instagram" src="/img/Insta.png" />
                  </span>
                </a>
                <a
                  className="dokme"
                  href="https://github.com/AbolfazlMahkam"
                  target="_blank"
                >
                  <span className="social-media-button github">
                    <img alt="GitHub" src="/img/Github.png" />
                  </span>
                </a>
                <a
                  className="dokme"
                  href="https://www.linkedin.com/in/abolfazl-mahkam-ab26442a5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                >
                  <span className="social-media-button link">
                    <img alt="Linkedin" src="/img/linkedin.png" />
                  </span>
                </a>
                <a
                  className="dokme"
                  href="https://a.mahkam.9500@gmail.com"
                  target="_blank"
                >
                  <span className="social-media-button email">
                    <img alt="Email" src="/img/email.png" />
                  </span>
                </a>
                <a
                  className="dokme"
                  href="https://twitter.com/amahkam950"
                  target="_blank"
                >
                  <span className="social-media-button X">
                    <img alt="Twitter(X)" src="/img/X.png" />
                  </span>
                </a>
                <a
                  className="dokme"
                  href="https://telegram.me/a_mahkam_950"
                  target="_blank"
                >
                  <span className="social-media-button tel">
                    <img alt="Telegram" src="/img/telegram.png" />
                  </span>
                </a>
                <a
                  className="dokme"
                  href="https://eitaa.com/a_mahkam_950"
                  target="_blank"
                >
                  <span className="social-media-button eitaa">
                    <img alt="Eitaa" src="/img/eitaa.png" />
                  </span>
                </a>
                <a className="dokme" href="" target="_blank">
                  <span className="social-media-button discord">
                    <img alt="discord" src="/img/discord.png" />
                  </span>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
