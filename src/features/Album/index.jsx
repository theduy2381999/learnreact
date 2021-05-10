import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList';


function AlbumFeature(props) {

    const albumList = [
        {
            id: 1,
            title: "Chúng ta của hiện tại",
            url: "https://photo-playlist-zmp3.zadn.vn/s3/v3/radio?src=HavwqN7EYmrDGr6VBegSG044GDzWmDr02mHAtshSrbO3LKtNFuxJKbvHHOOsZzW0NrGNY6FTZWrS1HBPAuJC3b13GD9WneKzMaX5-MRHoNCTMGYr8S29F5SR2BqXaeaqI4X5uNF1tc4P6KIoTiFVO1WT4xGbauitJqv0uNF7tdz0N1VjDPNLD08L9FOocU8oIKXkuN_LfIC9N2JoVu2bTWa9Ql5aWVKb2GXZfcZQ-Yu41cRzRjJuBrO7DVq-ZwWeK4fiw6w3xdf33JY-EDoqHGdqhfitFrDA0VIubtZSbWKD5KpC99l0HZ9z&cv=1&size=thumb/240_240",
            
        },
        {
            id: 2,
            title: "Muộn rồi mà sao còn",
            url: 'https://photo-playlist-zmp3.zadn.vn/s1/v3/radio?src=HavwqN7EYmrDGr6VBegSG044GDzlmDP010H1tshNtLO71HVKEepQLbi2GuLcsjHJNbL9rJAEqWHSL4ZIAzMM1L0I6jbWbzysMXaVycQ0atWT25A-8P7JFLTDKkWXmDDhJquRwY-SX6fEGaovSvdRFHr5HkXmdD5j7n98wIIOrNSN0npbOihUF5LAB_vbnkaw7XTbwIYAhYjUKo-hADkk8ru2CF0_swvu0mSp_MpSh7GD1cVyCDwhT5nNDg0nt_bp31ezipBJlo4VNMdbP8pb5lxJQs8tsNvB3HA6FUG_YUFQzWjnzsJLf8orIMa&cv=1&size=thumb/240_240' 
            
        },
        {
            id: 3,
            title: "Chẳng thể tìm được em",
            url: "https://photo-playlist-zmp3.zadn.vn/s3/v3/radio?src=HavwqN7EYmrDGr6VBegSG044GDzlmDf01WH1tsZRtrfI1aUCRT_O2mDGHOzlZ8fTL5OGY3lPY05I1nRL9OR80bv1HDvkn84nL4f1zMZJpNyJMmovByADE5aO3B0lmuqnHn0JudlDYcj15X3hAf-FFKj44RWXduSmIH0UitN9rIr6KXo_CvlUPWGRBwGqb-bWJqPbitdRhd4F22_nUTMkTWy6CF1Xslzu3bSrgpBPg2uF2p3uPj2gVrmCPQjXXAWiMq5ix6M8xdv81ZYwCzUqJmSSIPudrxNFnQzoNR1cg9IPw2GUCdq&cv=1&size=thumb/240_240"
        },

    ]

    return (
        <div>
            <h3>Zing mp3</h3>
            <h5>Chắc các bạn sẽ thích...</h5>
            <AlbumList albumList={albumList}/>
        </div>
    );
}

export default AlbumFeature;