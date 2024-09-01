import Header from './Header';
import Card from './Card';
import Footer from './Footer';

import { ItemType } from '../ts';

import { CHANNEL_TYPE_VS_COVER_IMAGE } from './constant';
import { CHANNEL_TYPES } from '../constants';

interface LinkeesProps {
  headerAvatar?: string;
  cardItems: ItemType[];
  name: string;
  occupation: string;
}

function Linkees({
  headerAvatar,
  cardItems,
  name,
  occupation,
}: LinkeesProps): JSX.Element {
  return (
    <div className="App">
      <Header avatar={headerAvatar} occupation={occupation} name={name} />
      <div className="container row">
        {cardItems.map((item, i: number) => {
          const coverImage: string =
            item.image ??
            CHANNEL_TYPE_VS_COVER_IMAGE[item.type] ??
            CHANNEL_TYPE_VS_COVER_IMAGE[CHANNEL_TYPES.WEBSITE];
          return (
            <Card
              key={i+item.title+item.subtitle}
              i={i}
              title={item.title}
              subtitle={item.subtitle}
              link={item.link}
              cover={coverImage}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export { Linkees };
