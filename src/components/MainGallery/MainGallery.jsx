import "./MainGallery.css";
import 'photoswipe/dist/photoswipe.css';
import { Gallery, Item } from 'react-photoswipe-gallery'
import Image1Thumbnail from "../../assets/images/climb-1.jpg";
import Image1 from "../../assets/images/climb-1-original.jpg";
import Image2Thumbnail from "../../assets/images/climb-2.jpg";
import Image2 from "../../assets/images/climb-2-original.jpg";
import Image3Thumbnail from "../../assets/images/climb-3.jpg";
import Image3 from "../../assets/images/climb-3-original.jpg";
import Image4Thumbnail from "../../assets/images/climb-4.jpg";
import Image4 from "../../assets/images/climb-4-original.jpg";
import FullscreenSVG from "../../assets/svg/fullscreen.svg";

const MainGallery = () => {
	return(
		<div className="gallery-container">
			<Gallery>
				<div className="gallery-item-container">
					<Item
						original={Image1.src}
						thumbnail={Image1Thumbnail.src}
						width="1224"
						height="768"
						>
						{({ ref, open }) => (
							<div className="gallery-item" ref={ref} onClick={open} >
								<div className="gallery-item-overlay">
									<img 
										className="gallery-item-fullscreen" 
										alt="View Gallery Image" 
										src={FullscreenSVG.src}
										width={24}
										height={24}
									/>
								</div>
								<img className="img-responsive" src={Image1Thumbnail.src} />
							</div>
						)}
					</Item>
				</div>
				<div className="gallery-item-container">
					<Item
						original={Image2.src}
						thumbnail={Image2Thumbnail.src}
						width="1224"
						height="768"
						>
						{({ ref, open }) => (
							<div className="gallery-item" ref={ref} onClick={open} >
								<div className="gallery-item-overlay">
									<img 
										className="gallery-item-fullscreen" 
										alt="View Gallery Image" 
										src={FullscreenSVG.src}
										width={24}
										height={24}
									/>
								</div>
								<img className="img-responsive" src={Image2Thumbnail.src} />
							</div>
						)}
					</Item>
				</div>
				<div className="gallery-item-container">
					<Item
						original={Image4.src}
						thumbnail={Image4Thumbnail.src}
						width="1224"
						height="768"
						>
						{({ ref, open }) => (
							<div className="gallery-item" ref={ref} onClick={open} >
								<div className="gallery-item-overlay">
									<img 
										className="gallery-item-fullscreen" 
										alt="View Gallery Image" 
										src={FullscreenSVG.src}
										width={24}
										height={24}
									/>
								</div>
								<img className="img-responsive" src={Image4Thumbnail.src} />
							</div>
						)}
					</Item>
				</div>
				<div className="gallery-item-container">
					<Item
						original={Image3.src}
						thumbnail={Image3Thumbnail.src}
						width="1224"
						height="768"
						>
						{({ ref, open }) => (
							<div className="gallery-item" ref={ref} onClick={open} >
								<div className="gallery-item-overlay">
									<img 
										className="gallery-item-fullscreen" 
										alt="View Gallery Image" 
										src={FullscreenSVG.src}
										width={24}
										height={24}
									/>
								</div>
								<img className="img-responsive" src={Image3Thumbnail.src} />
							</div>
						)}
					</Item>
				</div>
				<div className="gallery-item-container">
					<Item
						original={Image2.src}
						thumbnail={Image2Thumbnail.src}
						width="1224"
						height="768"
						>
						{({ ref, open }) => (
							<div className="gallery-item" ref={ref} onClick={open} >
								<div className="gallery-item-overlay">
									<img 
										className="gallery-item-fullscreen" 
										alt="View Gallery Image" 
										src={FullscreenSVG.src}
										width={24}
										height={24}
									/>
								</div>
								<img className="img-responsive" src={Image2Thumbnail.src} />
							</div>
						)}
					</Item>
				</div>
				<div className="gallery-item-container">
					<Item
						original={Image1.src}
						thumbnail={Image1Thumbnail.src}
						width="1224"
						height="768"
						>
						{({ ref, open }) => (
							<div className="gallery-item" ref={ref} onClick={open} >
								<div className="gallery-item-overlay">
									<img 
										className="gallery-item-fullscreen" 
										alt="View Gallery Image" 
										src={FullscreenSVG.src}
										width={24}
										height={24}
									/>
								</div>
								<img className="img-responsive" src={Image1Thumbnail.src} />
							</div>
						)}
					</Item>
				</div>
				<div className="gallery-item-container">
					<Item
						original={Image3.src}
						thumbnail={Image3Thumbnail.src}
						width="1224"
						height="768"
						>
						{({ ref, open }) => (
							<div className="gallery-item" ref={ref} onClick={open} >
								<div className="gallery-item-overlay">
									<img 
										className="gallery-item-fullscreen" 
										alt="View Gallery Image" 
										src={FullscreenSVG.src}
										width={24}
										height={24}
									/>
								</div>
								<img className="img-responsive" src={Image3Thumbnail.src} />
							</div>
						)}
					</Item>
				</div>
				<div className="gallery-item-container">
					<Item
						original={Image4.src}
						thumbnail={Image4Thumbnail.src}
						width="1224"
						height="768"
						>
						{({ ref, open }) => (
							<div className="gallery-item" ref={ref} onClick={open} >
								<div className="gallery-item-overlay">
									<img 
										className="gallery-item-fullscreen" 
										alt="View Gallery Image" 
										src={FullscreenSVG.src}
										width={24}
										height={24}
									/>
								</div>
								<img className="img-responsive" src={Image4Thumbnail.src} />
							</div>
						)}
					</Item>
				</div>
				<div className="gallery-item-container">
					<Item
						original={Image1.src}
						thumbnail={Image1Thumbnail.src}
						width="1224"
						height="768"
						>
						{({ ref, open }) => (
							<div className="gallery-item" ref={ref} onClick={open} >
								<div className="gallery-item-overlay">
									<img 
										className="gallery-item-fullscreen" 
										alt="View Gallery Image" 
										src={FullscreenSVG.src}
										width={24}
										height={24}
									/>
								</div>
								<img className="img-responsive" src={Image1Thumbnail.src} />
							</div>
						)}
					</Item>
				</div>
				<div className="gallery-item-container">
					<Item
						original={Image2.src}
						thumbnail={Image2Thumbnail.src}
						width="1224"
						height="768"
						>
						{({ ref, open }) => (
							<div className="gallery-item" ref={ref} onClick={open} >
								<div className="gallery-item-overlay">
									<img 
										className="gallery-item-fullscreen" 
										alt="View Gallery Image" 
										src={FullscreenSVG.src}
										width={24}
										height={24}
									/>
								</div>
								<img className="img-responsive" src={Image2Thumbnail.src} />
							</div>
						)}
					</Item>
				</div>
				<div className="gallery-item-container">
					<Item
						original={Image4.src}
						thumbnail={Image4Thumbnail.src}
						width="1224"
						height="768"
						>
						{({ ref, open }) => (
							<div className="gallery-item" ref={ref} onClick={open} >
								<div className="gallery-item-overlay">
									<img 
										className="gallery-item-fullscreen" 
										alt="View Gallery Image" 
										src={FullscreenSVG.src}
										width={24}
										height={24}
									/>
								</div>
								<img className="img-responsive" src={Image4Thumbnail.src} />
							</div>
						)}
					</Item>
				</div>
				<div className="gallery-item-container">
					<Item
						original={Image3.src}
						thumbnail={Image3Thumbnail.src}
						width="1224"
						height="768"
						>
						{({ ref, open }) => (
							<div className="gallery-item" ref={ref} onClick={open} >
								<div className="gallery-item-overlay">
									<img 
										className="gallery-item-fullscreen" 
										alt="View Gallery Image" 
										src={FullscreenSVG.src}
										width={24}
										height={24}
									/>
								</div>
								<img className="img-responsive" src={Image3Thumbnail.src} />
							</div>
						)}
					</Item>
				</div>
				
				<div className="gallery-item-container">
					<Item
						original={Image3.src}
						thumbnail={Image3Thumbnail.src}
						width="1224"
						height="768"
						>
						{({ ref, open }) => (
							<div className="gallery-item" ref={ref} onClick={open} >
								<div className="gallery-item-overlay">
									<img 
										className="gallery-item-fullscreen" 
										alt="View Gallery Image" 
										src={FullscreenSVG.src}
										width={24}
										height={24}
									/>
								</div>
								<img className="img-responsive" src={Image3Thumbnail.src} />
							</div>
						)}
					</Item>
				</div>
				<div className="gallery-item-container">
					<Item
						original={Image4.src}
						thumbnail={Image4Thumbnail.src}
						width="1224"
						height="768"
						>
						{({ ref, open }) => (
							<div className="gallery-item" ref={ref} onClick={open} >
								<div className="gallery-item-overlay">
									<img 
										className="gallery-item-fullscreen" 
										alt="View Gallery Image" 
										src={FullscreenSVG.src}
										width={24}
										height={24}
									/>
								</div>
								<img className="img-responsive" src={Image4Thumbnail.src} />
							</div>
						)}
					</Item>
				</div>
				<div className="gallery-item-container">
					<Item
						original={Image2.src}
						thumbnail={Image2Thumbnail.src}
						width="1224"
						height="768"
						>
						{({ ref, open }) => (
							<div className="gallery-item" ref={ref} onClick={open} >
								<div className="gallery-item-overlay">
									<img 
										className="gallery-item-fullscreen" 
										alt="View Gallery Image" 
										src={FullscreenSVG.src}
										width={24}
										height={24}
									/>
								</div>
								<img className="img-responsive" src={Image2Thumbnail.src} />
							</div>
						)}
					</Item>
				</div>
				<div className="gallery-item-container">
					<Item
						original={Image1.src}
						thumbnail={Image1Thumbnail.src}
						width="1224"
						height="768"
						>
						{({ ref, open }) => (
							<div className="gallery-item" ref={ref} onClick={open} >
								<div className="gallery-item-overlay">
									<img 
										className="gallery-item-fullscreen" 
										alt="View Gallery Image" 
										src={FullscreenSVG.src}
										width={24}
										height={24}
									/>
								</div>
								<img className="img-responsive" src={Image1Thumbnail.src} />
							</div>
						)}
					</Item>
				</div>
		</Gallery>
  </div>
  );
};

export default MainGallery;
