import Section from "@components/section";
import clsx from "clsx";

function Card({
	title,
	description,
	icon,
}: {
	title: string;
	description: string;
	icon: JSX.Element;
}) {
	const [title1, title2] = title.split(" ");
	return (
		<div className="background-glass lg:max-w-[350px] py-10 shadow-lg p-6 rounded-[45px]">
			<div className="text-white background-gradient p-3 rounded-xl w-fit">
				{icon}
			</div>
			<h3 className="my-5 bold h4 uppercase tracking-[0.2em]">
				{title1} <span className="text-glow">{title2}</span>
			</h3>
			<p className="max-w-[60ch] font-light">{description}</p>
		</div>
	);
}

export default function Services() {
	return (
		<Section>
			<div
				className={clsx(
					"grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-20",
					"w-[90%] lg:w-full mx-auto"
				)}
			>
				{sections.map((section) => (
					<Card key={section.description} {...section} />
				))}
			</div>
		</Section>
	);
}

const sections = [
	{
		title: "Coding courses",
		description:
			"Arafa Tech provides coding education courses to underprivileged students of all ages, with the goal of empowering them with technical skills for the future. These classes can be offered in a variety of formats, including online and in-person, and can cover a range of topics such as web development, mobile app development, and software engineering.",
		icon: (
			<svg
				className="w-8 h-8"
				viewBox="0 0 47 36"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M10.575 0C12.1331 0 13.6275 0.592632 14.7293 1.64752C15.831 2.70242 16.45 4.13316 16.45 5.625C16.45 7.11684 15.831 8.54758 14.7293 9.60248C13.6275 10.6574 12.1331 11.25 10.575 11.25C9.01685 11.25 7.52252 10.6574 6.42075 9.60248C5.31897 8.54758 4.7 7.11684 4.7 5.625C4.7 4.13316 5.31897 2.70242 6.42075 1.64752C7.52252 0.592632 9.01685 0 10.575 0ZM37.6 0C39.1581 0 40.6525 0.592632 41.7543 1.64752C42.856 2.70242 43.475 4.13316 43.475 5.625C43.475 7.11684 42.856 8.54758 41.7543 9.60248C40.6525 10.6574 39.1581 11.25 37.6 11.25C36.0419 11.25 34.5475 10.6574 33.4457 9.60248C32.344 8.54758 31.725 7.11684 31.725 5.625C31.725 4.13316 32.344 2.70242 33.4457 1.64752C34.5475 0.592632 36.0419 0 37.6 0ZM0 21.0023C0 16.8609 3.51031 13.5 7.83578 13.5H10.9716C12.1392 13.5 13.2481 13.7461 14.2469 14.182C14.1514 14.6883 14.1073 15.2156 14.1073 15.75C14.1073 18.4359 15.3411 20.8477 17.2872 22.5C17.2725 22.5 17.2578 22.5 17.2358 22.5H1.56422C0.705 22.5 0 21.825 0 21.0023ZM29.7642 22.5C29.7495 22.5 29.7348 22.5 29.7128 22.5C31.6663 20.8477 32.8927 18.4359 32.8927 15.75C32.8927 15.2156 32.8412 14.6953 32.7531 14.182C33.7519 13.7391 34.8608 13.5 36.0284 13.5H39.1642C43.4897 13.5 47 16.8609 47 21.0023C47 21.832 46.295 22.5 45.4358 22.5H29.7642ZM16.45 15.75C16.45 13.9598 17.1928 12.2429 18.5149 10.977C19.837 9.71116 21.6302 9 23.5 9C25.3698 9 27.163 9.71116 28.4851 10.977C29.8072 12.2429 30.55 13.9598 30.55 15.75C30.55 17.5402 29.8072 19.2571 28.4851 20.523C27.163 21.7888 25.3698 22.5 23.5 22.5C21.6302 22.5 19.837 21.7888 18.5149 20.523C17.1928 19.2571 16.45 17.5402 16.45 15.75ZM9.4 34.1227C9.4 28.9477 13.7842 24.75 19.1892 24.75H27.8108C33.2158 24.75 37.6 28.9477 37.6 34.1227C37.6 35.1562 36.7261 36 35.6392 36H11.3608C10.2812 36 9.4 35.1633 9.4 34.1227Z"
					fill="white"
				/>
			</svg>
		),
	},
	{
		title: "mentorship program",
		description:
			"Arafa Tech's mentorship program connects students with experienced professionals in the tech industry, providing them with guidance and support as they develop their technical skills. Mentors can provide feedback on projects, help students prepare for job interviews, and offer advice on career development.",
		icon: (
			<svg
				className="w-8 h-8"
				viewBox="0 0 46 46"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M15.8125 2.15625C15.8125 0.961328 14.8512 0 13.6562 0C12.4613 0 11.5 0.961328 11.5 2.15625V5.75C8.32852 5.75 5.75 8.32852 5.75 11.5H2.15625C0.961328 11.5 0 12.4613 0 13.6562C0 14.8512 0.961328 15.8125 2.15625 15.8125H5.75V20.8438H2.15625C0.961328 20.8438 0 21.8051 0 23C0 24.1949 0.961328 25.1562 2.15625 25.1562H5.75V30.1875H2.15625C0.961328 30.1875 0 31.1488 0 32.3438C0 33.5387 0.961328 34.5 2.15625 34.5H5.75C5.75 37.6715 8.32852 40.25 11.5 40.25V43.8438C11.5 45.0387 12.4613 46 13.6562 46C14.8512 46 15.8125 45.0387 15.8125 43.8438V40.25H20.8438V43.8438C20.8438 45.0387 21.8051 46 23 46C24.1949 46 25.1562 45.0387 25.1562 43.8438V40.25H30.1875V43.8438C30.1875 45.0387 31.1488 46 32.3438 46C33.5387 46 34.5 45.0387 34.5 43.8438V40.25C37.6715 40.25 40.25 37.6715 40.25 34.5H43.8438C45.0387 34.5 46 33.5387 46 32.3438C46 31.1488 45.0387 30.1875 43.8438 30.1875H40.25V25.1562H43.8438C45.0387 25.1562 46 24.1949 46 23C46 21.8051 45.0387 20.8438 43.8438 20.8438H40.25V15.8125H43.8438C45.0387 15.8125 46 14.8512 46 13.6562C46 12.4613 45.0387 11.5 43.8438 11.5H40.25C40.25 8.32852 37.6715 5.75 34.5 5.75V2.15625C34.5 0.961328 33.5387 0 32.3438 0C31.1488 0 30.1875 0.961328 30.1875 2.15625V5.75H25.1562V2.15625C25.1562 0.961328 24.1949 0 23 0C21.8051 0 20.8438 0.961328 20.8438 2.15625V5.75H15.8125V2.15625ZM14.375 11.5H31.625C33.2152 11.5 34.5 12.7848 34.5 14.375V31.625C34.5 33.2152 33.2152 34.5 31.625 34.5H14.375C12.7848 34.5 11.5 33.2152 11.5 31.625V14.375C11.5 12.7848 12.7848 11.5 14.375 11.5ZM31.625 14.375H14.375V31.625H31.625V14.375Z"
					fill="white"
				/>
			</svg>
		),
	},
	{
		title: "job placement",
		description:
			"Arafa Tech helps connect students with job opportunities in the tech industry through partnerships with companies and organizations. This can include resume and cover letter reviews, job search assistance, and interview preparation.",
		icon: (
			<svg
				className="w-8 h-8"
				viewBox="0 0 46 37"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M22.3167 9.4139C22.8365 8.94802 23.0415 8.21591 22.7706 7.56514C22.6023 7.1732 22.4192 6.78866 22.2143 6.41891L21.9873 6.01957C21.7677 5.64982 21.5261 5.28746 21.2699 4.9399C20.8526 4.37787 20.1205 4.193 19.4616 4.41485L17.3971 5.10259C16.6137 4.45182 15.7133 3.91938 14.7469 3.55702L14.3003 1.41246C14.1612 0.724715 13.6341 0.177481 12.9459 0.0961357C12.4628 0.0295802 11.9723 0 11.4744 0H11.4232C10.9254 0 10.4349 0.0295802 9.95168 0.0887406C9.26351 0.170086 8.7364 0.724715 8.5973 1.40506L8.15073 3.55702C7.17704 3.92677 6.28389 4.45182 5.50055 5.10259L3.42872 4.42224C2.76983 4.20039 2.03774 4.38527 1.62045 4.94729C1.36421 5.29486 1.12262 5.65722 0.895673 6.02697L0.676045 6.41891C0.471059 6.78866 0.288035 7.1732 0.119654 7.57254C-0.151221 8.2159 0.053765 8.94801 0.573552 9.4213L2.1988 10.8855C2.11827 11.381 2.07435 11.8986 2.07435 12.4237C2.07435 12.9487 2.11827 13.4664 2.1988 13.9693L0.573552 15.4335C0.053765 15.8994 -0.151221 16.6315 0.119654 17.2822C0.288035 17.6742 0.471059 18.0587 0.676045 18.4359L0.895673 18.8204C1.1153 19.1976 1.35689 19.5525 1.62045 19.9001C2.03774 20.4621 2.76983 20.647 3.42872 20.4251L5.49323 19.7374C6.27657 20.3882 7.17704 20.9206 8.14341 21.283L8.58998 23.4349C8.72908 24.1227 9.25619 24.6699 9.94436 24.7512C10.4349 24.8104 10.9327 24.84 11.4378 24.84C11.943 24.84 12.4408 24.8104 12.9313 24.7512C13.6195 24.6699 14.1466 24.1153 14.2857 23.4349L14.7323 21.283C15.7059 20.9132 16.5991 20.3882 17.3824 19.7374L19.4469 20.4251C20.1058 20.647 20.8379 20.4621 21.2552 19.9001C21.5114 19.5525 21.753 19.1976 21.9727 18.8204L22.1996 18.4211C22.4046 18.0513 22.5876 17.6668 22.756 17.2748C23.0269 16.6315 22.8219 15.8994 22.3021 15.4261L20.6769 13.9619C20.7574 13.459 20.8013 12.9413 20.8013 12.4163C20.8013 11.8912 20.7574 11.3736 20.6769 10.8707L22.3021 9.40651L22.3167 9.4139ZM7.9311 12.4237C7.9311 11.4823 8.30133 10.5794 8.96034 9.91372C9.61935 9.24804 10.5132 8.87406 11.4452 8.87406C12.3771 8.87406 13.2709 9.24804 13.93 9.91372C14.589 10.5794 14.9592 11.4823 14.9592 12.4237C14.9592 13.3651 14.589 14.268 13.93 14.9337C13.2709 15.5993 12.3771 15.9733 11.4452 15.9733C10.5132 15.9733 9.61935 15.5993 8.96034 14.9337C8.30133 14.268 7.9311 13.3651 7.9311 12.4237ZM36.6804 36.4206C37.1417 36.9457 37.8664 37.1528 38.5107 36.8791C38.8987 36.709 39.2794 36.5242 39.6454 36.3171L40.0407 36.0879C40.4068 35.866 40.7655 35.622 41.1096 35.3631C41.666 34.9416 41.849 34.2021 41.6294 33.5366L40.9485 31.4512C41.5928 30.6599 42.1199 29.7503 42.4786 28.7742L44.609 28.3231C45.2899 28.1826 45.8316 27.6501 45.9121 26.955C45.9707 26.4595 46 25.9566 46 25.4464C46 24.9361 45.9707 24.4333 45.9121 23.9378C45.8316 23.2427 45.2825 22.7102 44.609 22.5697L42.4786 22.1112C42.1126 21.1277 41.5928 20.2255 40.9485 19.4342L41.6294 17.3488C41.849 16.6832 41.666 15.9437 41.1096 15.5222C40.7655 15.2634 40.4068 15.0194 40.0407 14.7901L39.6527 14.5683C39.2867 14.3612 38.906 14.1763 38.5107 14.0062C37.8738 13.7326 37.149 13.9397 36.6804 14.4647L35.2309 16.1064C34.7331 16.0251 34.2206 15.9807 33.7008 15.9807C33.181 15.9807 32.6686 16.0251 32.1707 16.1064L30.7212 14.4647C30.26 13.9397 29.5352 13.7326 28.891 14.0062C28.5029 14.1763 28.1223 14.3612 27.7489 14.5683L27.3682 14.7901C26.9948 15.012 26.6434 15.256 26.2993 15.5222C25.743 15.9437 25.5599 16.6832 25.7796 17.3488L26.4604 19.4342C25.8162 20.2255 25.2891 21.1351 24.9303 22.1112L22.7999 22.5549C22.1191 22.6954 21.5773 23.2279 21.4968 23.923C21.4382 24.4185 21.409 24.9213 21.409 25.4316C21.409 25.9418 21.4382 26.4447 21.4968 26.9402C21.5773 27.6353 22.1264 28.1678 22.7999 28.3083L24.9303 28.7594C25.2964 29.7429 25.8162 30.6451 26.4604 31.4364L25.7796 33.5218C25.5599 34.1873 25.743 34.9268 26.2993 35.3484C26.6434 35.6072 26.9948 35.8512 27.3682 36.0731L27.7635 36.3023C28.1296 36.5094 28.5103 36.6943 28.8983 36.8643C29.5352 37.138 30.26 36.9309 30.7285 36.4058L32.1781 34.7641C32.6759 34.8455 33.1884 34.8899 33.7081 34.8899C34.2279 34.8899 34.7404 34.8455 35.2382 34.7641L36.6878 36.4058L36.6804 36.4206ZM33.7008 21.8894C34.1623 21.8894 34.6192 21.9812 35.0456 22.1596C35.4719 22.3379 35.8593 22.5994 36.1856 22.929C36.5119 23.2586 36.7708 23.6499 36.9474 24.0806C37.124 24.5113 37.2149 24.9728 37.2149 25.439C37.2149 25.9051 37.124 26.3667 36.9474 26.7974C36.7708 27.228 36.5119 27.6193 36.1856 27.9489C35.8593 28.2786 35.4719 28.54 35.0456 28.7184C34.6192 28.8968 34.1623 28.9886 33.7008 28.9886C33.2393 28.9886 32.7824 28.8968 32.356 28.7184C31.9297 28.54 31.5423 28.2786 31.216 27.9489C30.8897 27.6193 30.6309 27.228 30.4543 26.7974C30.2777 26.3667 30.1868 25.9051 30.1868 25.439C30.1868 24.9728 30.2777 24.5113 30.4543 24.0806C30.6309 23.6499 30.8897 23.2586 31.216 22.929C31.5423 22.5994 31.9297 22.3379 32.356 22.1596C32.7824 21.9812 33.2393 21.8894 33.7008 21.8894Z"
					fill="white"
				/>
			</svg>
		),
	},
];
