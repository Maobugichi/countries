export default function CountriesList({children}) {
    return <ul className="flex flex-col lg:flex-row gap-8 flex-wrap lg:w-[95%] w-full mx-auto">{children}</ul>
}