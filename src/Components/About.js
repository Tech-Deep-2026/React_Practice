import { IMG_URL } from "../utils/constants";

const About = () => {

    return (
        <div className="flex m-4">
            <div className=" m-14">
                <h1 className=" font-bold mb-8" >Welcome...!!!</h1>
                <div className="w-[850] justify-normal">
                    <h2 className="font-bold">What is Lorem Ipsum?</h2>
                    <p className="m-4 content-e">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum.</p>
                    <h2 className="font-bold">What is Lorem Ipsum?</h2>
                    <p className="m-4 justify-items-end">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum.</p>
                    <h2 className="font-bold">What is Lorem Ipsum?</h2>
                    <p className="m-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum.</p>

                </div>
            </div>
            <div className="p-8 bg-gray-200">
                <img src={IMG_URL}></img>
            </div>
        </div>
    )
}
export default About;