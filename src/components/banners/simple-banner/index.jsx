import React from 'react'
import ContainerAll from 'modules/container/all'


const index = () => {
  return (
    <ContainerAll
      url={"/banners"}
      queryKey={"banners"}
      params={{
        sort: "-updated_at",
        include: "file",
        limit: "2",
        // page: get(params, "page", 1),
        extra: { _l: "uz" },
        filter:{
          type: "1"
        }
      }}
    >
      {
        ({ items, isLoading }) => {
          return (
            <>
              {
                !isLoading ?
                items?.map((item) => {
                  return (
                    <div className="second-card">
                      <img src={item?.file?.thumbnails?.normal?.src} alt="" />
                      <div className="card-info">
                        <h3>{item?.name_uz}</h3>
                        <p>
                          {item?.description_uz}
                        </p>
                      </div>
                    </div>
                  )
                }): <h1>Loading...</h1>
              }
            </>
          )
        }
      }

    </ContainerAll>
  )
}

export default index