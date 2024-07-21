import Image from "next/image";

interface Props{
    child:any,
    isContent?:boolean
}


const HeadSection = ({child,isContent}:Props) => {
    return (
        <>
        <div className="head">
            <div className="icon">
                <Image
                    src={child?.megaMenu?.icon?.node?.mediaItemUrl || ""}
                    alt={child?.megaMenu?.icon?.node?.altText || ""}
                    height={child?.megaMenu?.icon?.node?.mediaDetails?.height || 0}
                    width={child?.megaMenu?.icon?.node?.mediaDetails?.width || 0}
                />
            </div>
            <div className="label">
                <a href={child.url} className="dropdown-item">
                    {child.label}
                </a>
            </div>
        </div>
        {
            isContent && (
                <div className="content">
                    {child.description ?? "Default text for testing on local"}
                </div>
            )
        }
        </>
    )
}
export default HeadSection;