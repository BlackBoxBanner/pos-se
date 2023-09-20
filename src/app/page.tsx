import Link from "next/link";
import Logout from "@/components/button/logout";
import { useServerSession } from "@./utils/auth/session";
import { Flex } from "@./components/layout";

export default async function Home() {
	const session = await useServerSession();

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24 gap-4">
			<Flex
				flexDirection={"column"}
				gap={4}
				className="w-[10rem] h-[10rem] border"
			>
				<div>1</div>
				<div>1</div>
				<div>1</div>
			</Flex>
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
