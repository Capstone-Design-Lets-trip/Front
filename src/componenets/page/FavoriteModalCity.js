import Results from "../Results";
import DeleteCityButton from "./DeleteCityButton";

function FavoriteModalCity({ setModalOpens, itemss, index }) {
    console.log('네임',itemss.name)

    // 모달 끄기 
    const closeModal = () => {
        setModalOpens(false);
    };

    return (
        <div className="container" style={{height:"430px", overflow: "auto", alignItems:"center"}}>
            <button className="close" onClick={closeModal}>
                X
            </button>
            <br/>
            <br/>
            <Results
                index={index}
                name={itemss.name}
                imgUrl={itemss.imgUrl}
                overview={itemss.overview}
                address={itemss.address}
                localAddress={itemss.localAddress}
                phoneNumber={itemss.phoneNumber}
                latitude={itemss.latitude}
                longitude={itemss.longitude}
                sun={itemss.sun}
                mon={itemss.mon}
                tue={itemss.tue}
                wed={itemss.wed}
                thu={itemss.thu}
                fri={itemss.fri}
                sat={itemss.sat}
                keywordImgUrl={itemss.keywordImgUrl}
                id={itemss.id}
                arrive_time={itemss.arrive_time}
                depart_time={itemss.depart_time}
                move_time={itemss.move_time}
            />
            <DeleteCityButton name={itemss.name}/>
        </div>
    );
}
export default FavoriteModalCity;