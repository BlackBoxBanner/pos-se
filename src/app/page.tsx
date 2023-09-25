import Link from "next/link";
import Logout from "@/components/button/logout";
import { useServerSession } from "@./utils/auth/session";

export default async function Home() {
	const session = await useServerSession();

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24 gap-4">
			<div className="flex justify-center -space-x-14">
				<div className="mix-blend-multiply bg-blue-400 w-10 h-10 rounded-full"></div>
				<div className="mix-blend-multiply bg-pink-400 w-10 h-10 rounded-full"></div>
			</div>
			{session ? JSON.stringify(session) : "no session"}
			<Link href={"/signin"}>signin</Link>
			<Link href={"/register"}>register</Link>
			<Link href={"/users"}>users</Link>
			<Logout>logout</Logout>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
				quibusdam fugit, impedit sunt blanditiis officiis voluptas doloribus
				iusto, voluptate neque nobis temporibus harum tempore omnis tenetur
				nostrum ullam eligendi dicta!
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
				quibusdam fugit, impedit sunt blanditiis officiis voluptas doloribus
				iusto, voluptate neque nobis temporibus harum tempore omnis tenetur
				nostrum ullam eligendi dicta!
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
				quibusdam fugit, impedit sunt blanditiis officiis voluptas doloribus
				iusto, voluptate neque nobis temporibus harum tempore omnis tenetur
				nostrum ullam eligendi dicta!
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
				quibusdam fugit, impedit sunt blanditiis officiis voluptas doloribus
				iusto, voluptate neque nobis temporibus harum tempore omnis tenetur
				nostrum ullam eligendi dicta!
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
				quibusdam fugit, impedit sunt blanditiis officiis voluptas doloribus
				iusto, voluptate neque nobis temporibus harum tempore omnis tenetur
				nostrum ullam eligendi dicta!
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
				quibusdam fugit, impedit sunt blanditiis officiis voluptas doloribus
				iusto, voluptate neque nobis temporibus harum tempore omnis tenetur
				nostrum ullam eligendi dicta!
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
				quibusdam fugit, impedit sunt blanditiis officiis voluptas doloribus
				iusto, voluptate neque nobis temporibus harum tempore omnis tenetur
				nostrum ullam eligendi dicta!
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
				quibusdam fugit, impedit sunt blanditiis officiis voluptas doloribus
				iusto, voluptate neque nobis temporibus harum tempore omnis tenetur
				nostrum ullam eligendi dicta!
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
				quibusdam fugit, impedit sunt blanditiis officiis voluptas doloribus
				iusto, voluptate neque nobis temporibus harum tempore omnis tenetur
				nostrum ullam eligendi dicta!
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
				quibusdam fugit, impedit sunt blanditiis officiis voluptas doloribus
				iusto, voluptate neque nobis temporibus harum tempore omnis tenetur
				nostrum ullam eligendi dicta!
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
				quibusdam fugit, impedit sunt blanditiis officiis voluptas doloribus
				iusto, voluptate neque nobis temporibus harum tempore omnis tenetur
				nostrum ullam eligendi dicta!
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
				quibusdam fugit, impedit sunt blanditiis officiis voluptas doloribus
				iusto, voluptate neque nobis temporibus harum tempore omnis tenetur
				nostrum ullam eligendi dicta!
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
				quibusdam fugit, impedit sunt blanditiis officiis voluptas doloribus
				iusto, voluptate neque nobis temporibus harum tempore omnis tenetur
				nostrum ullam eligendi dicta!
			</p>
		</main>
	);
}
