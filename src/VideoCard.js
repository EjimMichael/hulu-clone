import React from 'react'
import './VideoCard.css';

function VideoCard({ movie }) {
    return (
         <div className="videoCard">
            <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBQVFBgUFRUZGRgZGxsaGRsaGx0bGhoaGBoaGhgdGRobIS0kIR0qIRoaJTclKi4xNDQ0GiM6PzozPi0zNDEBCwsLEA8QHRISHzMjIyozMzMxMzMzMzMxMzMzMzwzMzMxMzMzMzMzMzEzMzEzMzMzMzMzMzMzMzMzMzMzMTMzNf/AABEIAMIBAwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAAAgMEBQYBB//EAEYQAAIBAwIEBAIGBgcHBAMAAAECAwAEERIhBTFBUQYTImFxgQcUMpGhsSNCUmJy0TNzgpLB4fAVNKKyw9LxJESTwiZDVP/EABgBAQEBAQEAAAAAAAAAAAAAAAABAgME/8QAIxEBAQADAAICAQUBAAAAAAAAAAECESESMQNBURMiMmFxgf/aAAwDAQACEQMRAD8A8b1nvXMml6aFjJoDzW7mjz2/aNPraHtXGtCOdDRrz3/aNJ8xu5qStmaX9S9qioWo966shHI06bc9qadMVUKE7ftH76PrD/tGkKuakpak0DJuH/aNJ81u5qU1oRXFtM71FMC4f9o136y/7RqULKo0luRVAt046mj62/7RpPlGgRGiHBeyD9Y0G+k/apCwk0oWxopQv5P2q7/tGTvTLwkVxYzREocTf2pEl8560hbZj0+HvVxZcEUeqdiv7i41f2j0+HP4VLZF6pxeOOtKHEH71ozDajYRD5kk/eTmoM9jA2dJKdjzX8d8VPKLqqo3r96ba4c9TT8vD3U459iORHcUj6m1VOkLcuOpqQvE3FKh4cW9qefhOBU3DVMDij9hS/8Aa7fsimZeHsBmoZFXh0/cXTPzqPmiiqhWo96KTRQX68OwadW0x0q0QqacwOlcbnXaYRXJbHtRJaHtVkrYpE8u1ZmdtXxirEOKX5VSExTqKK3cmZFd5GelIbhmqroItdLgVnzXwUkfDtPMU+sNS5p6jmStbtTUce2zXFtPanBdYpQugadOEG22po2uTyqTJcUz9ZxSXIuiP9m5pt+HgdKkDiFIa6zvSeSftRVtcVIS19qbNyKkJdDFW7JIba2B2xQtko6V36yKPrNOnCmmSIajjUdl9u5HvVbJxDVnc/fv71p4vA890izB0QOisgIZiVIyCdGcZ6bdelQbjwBcryeM/wB8fmlJlj90uOX4Zp7nc7/dTLTt3q4v/Ct1EMlAw66DqP8Ad5/hVIy42OxHQ1uWX0xZZ7WXDr0lgjbg8vjVqUFU1pYTaROInMSsAZAraASQMF8Yzv36irqJw1ZyaxPxgCkyvTkdrnrXZ7bHWucs23q6RTgjFVt9ZjGRU8xGuSwEqRW4zYzJFcNPXMRViDTNdHMUUUUGpLkGlLMRUlbWl/VhXG5R38aZSekyNU2KJRSblVxyrMymzV0rvNp1JxiueRmnBag1q2MzZtrrtXBITUlbQU9FCoNTyxXVQJEPOmmU1b3CrimoohSZ8XxVJiPWnI4qsJox0plxgVqZ7Z8UR6bkSpaxZ3pLJ0q7NKK4uui/M/yqIWJ5k16L4f8AA8dzGJGyAWI2ONlODnn1zVtxLwDZpExGsvjZtR9O/VRtj5Uvy4zieFryQqRv+I/mKlQXJ5N16/zrl/GqOUXO32snr1qKzZrftzWq5qSI9qds4QUU91BP3VOeEYrFykdJi0/AuK3BjjCxkwoiR6vQGVxhABhtTLsP1cgEZyKXP4okjl8mS0bVkjUQ5BzywEGc1a/RnFG0baguqOUsCcZAeNAMH4o33VpuLRQ+YBKinXnDEdRjbv8A+K8+XjMq6z0zljxNZJPL8hxj7RIbQPbLAfhmofHoLZzoESMdt2AIXvueVXV3fRwp5cagZ69qxd/MdLlThmBAz3IOPxrlO5cb5pO4oWNhJ5kIi0oVTBIAydIUKVAVTqQ7ZycHnWBtiQa2PiLjivbRrKsiIWAIRw/qVSdRVgAy7n05Xvms+/DSArqyujjKOudLDtvuGHIqdwfkT6vj5jbXHLt4dt5dqLiXNJeEqKaVSaST2pYfakzXQUUxflkXNUFxcs2xNamMrNy0L2bW2RUaiiuschRRRQbjzsVxbjPWsz9ak96PrUg71x/Tdf1GoL1HmeqEX8lDXshqz49J5rtXp9H96zPnSdzSluZOWTS4bPNpzce9dD5rLm5k711L6QVP0182ikc02J8VRNfSGmGun71Z8aebTrcZpL71mFunHU04b6TvV8DzaBWoJFZ1ryQ9a59ak7mngeb07hPiY2vDEmWBnCyMjerRpZ2dvUdJ+H9oVqLPiAuokcIdLKrYJBPqAY7A8t8Z25Vm/B3E4p7H6tJCuhTpdiwJdmbWX0tzbcddiK1tvapHGFiPo6Y2G2BsOgGOVcPks3rTphvW3m3iLw2klyY41cOcZJKlEXqWwNRwPfpVN4n8MfVIoZBJq8zIIIAwRuCME7Y5g7g9816pKVQkkc85xzOeYHvXnP0jcSeZ48jSgDaV7fZGT7/gOQrXx53cxZyxmrVfanCKP3V/IU88lUC3ritf4f8ACN3cYeU+RGeRZfWw/djyCB+82B2zXW4sTIxwu4clolYhpV0BgrMVbmGVUGScauXen+GcRa0V8q1wSTlisiuvfZ15ZAOQfiK3Vj4ctYVKxAlyCDK51PknYqB6Vx7KCcb5rzniHHp0d1kudbIWUpoVfWpI3KjfBHOs63dRreu1Zjj6TLqBIPIhvtA1WzcUzJo57g/6/P5VlPPbUWBwSSTj3OeVaDgfDz/SOdzvv0/zpfjxx6TO3i+4rZCe10g7q6MvvqOjH/Hn+zTH0e+pZ4ZFyh0sByIbdSVPQ7jf2x7VOtpvWqKRsC+M4zpwsSj3aVoxUbwk6/W50BOkIEU9/LwrE45k8/nUxl8bsy/kf41wmSIaxlo8j1DmpPIOByPTPI+x2qshWvQkIK6SNQYYYHcEHbcHmPb2qv4p4chkGbdvKfrG5JiY9dEm5Q/xZHL7NRd/lguL3ICYPOsuxqy45DMkpjmjZHHNW5+xGNiD0IyD0qqrtjjqOeV3RRRRWmRRRRQW3mCks4qCZTXC5qaXaUziuhxmoZeuh6osFkFL1iq0PXTIamjaczimncVFMhpOo0NpeRScioweu66B44pOaa1UaqocJoBpsb8q0VnwBckyyDSuPSuzHO/qz9mpbJ7JNpfgXiYhncMxVGTcLj1Mp9I39mb416THxqMjKtkn9X3NeSXli0kqxxqAhzpI2UgY1Mcb9tzk1f8AhPgTpcgE+rJ0sOoA1ZHYncY/lvx+TGXu3TC2cbYoTl3HwByMZ5/696z/ABPwrJespRlRUOXd84VTucADc7Db8q10lk+kDBznHIj45/CoV5drHGR+qh5dC3v75/KuOEsy21lZpH4H4YtLP1hfMlHKSQAlduaR7hT25sM86fv+NRRyeXJIEZsEA8yp22Pf25/hUaz4iZI1dueD94PSoYh8y58xhlURSu36xyds/n7Cu2+9c/8AE9eOQsTHG4Zx9rHJe2r7q8l4jw+RUE7n+kZs555O5/HP3V6kinUSQATg7de2T7f4VkeJ4l4dKwx+guSCNs4dn08uhDcz1Q9quN7xP9YlRk42Hx2FShcyRkor7DbKnI+R7UxBCzsFQEsxwAOZPYVMXhMvnJbshWR2RVB7yEBTtzG45V14y1fBFe3sZL6RjqchYgT9pgWRNuqhvNcjvCtL8DW2EWXqZG/ulCpz7Z0mkfSHxGPUlpBkRWqqg66pAArkn90KF/iL96tvC1sUtl74D/MgVjK8aaFZeykE9/x5UtGK9OXQ78v9H76yPH76dW1QTacAlo2AONIJyhI5bculR+IC+8sSLdHGhX2VUzrAJ3Ubf5CsTFdtxxKxt7qMRzoMb6WH20J3JRsZX3ByDjcGvMPEvg2e0BkX9LADjzFH2c8hIu+n45KnI33xW9s5vSsZJLIqKzNuSxQE578xk/GrE8S8uEscbpltsjDDZcHY5zyI61ccrFsleEUVqfGPAhC4ljXETnBAOQj4zj+EjcfAjpWWrrLtizQoooqoe01wrSC1czQL01wik5ozQdFOBKQrUeYaBRSjTTZajNAorXMUnNKDUHMVwCu5qRYxa5FXufy3P5UGh4NY+WhlK+vmuR9nOyfAkkZ+NSXBGWYa0GXfPLRjBPbPIAVziFz+gVgR62VjnljUpAO3cfhUDiMjP6ATjK5A6/Eddya5Td66eo0vAo1abzM59DAHuCyb4+ArRW4KSLIOaNq2yORORn3GRWe8LRMJCf1VQjPLfUuBjpyb7qvb6UIjMeQIJPPAzvXDP+Tc9Np408QJaW5YE63XbHNVO2eWf/BPSvGbjjBm0jVsACB3bkfy/GtHxjiDzlHnGnziV0HlGh9MKn3wBn95jXn81nNbSZxnS2kHYg59uma9GMjla1M3FlhgXVzOcDnzyaf4RxZ3jDjOSSN+wOB+VY7jpYsM8hsPlWo8NxkQLkbYz32JJplNQ31obGcsqs3Ncq3y3rOeBFhmjv4Jm0pJGjlv2NEuBIfZTIrH90N71bPcRrHKyODpXJx+q2OR7bflWY+j3DXMkB/9xbTwg9maMsv4oKmM5Sq2/wCFzWdwI3yrqdSOp9LLn0SIw5o2Mg1s/CNsYo5OK3DFmRHNvqb1MEBVnx21FUU92Y45GrvwvwRkiii4kjTRsEeCIoH8oc9JcsCucr6NwM471lvFV1K9tJI2vElwsajCqkdvAjNBGAo23kY++gHcmtbl4as6xU85bdskkkknqSSSfmTmvWeBp+hQfu/hivIW5D/XtXsPh9swIf3V/Lep8noiJx8aIn0Aa2BAJ6bf5imbRfMsoVwfVHGh98lV/Ko3ja6CKiE8w7D3wBkf8S1I8NThrSA9Rt/cYj/Csa/as9l292A07OwGWkbUeQ/SMB/w4qBcXpuJIIU+w36R87HQrehT/dH3VkeM8RLFoxsA7535gMcA1c+H7kQrLcyDZAqIP2mC+lR9+T861466banj8aSW80RI1srMi53JhUOSB/Zx23ryQ16Z4ds2w8kpzJMQhJ6GTOFUdMKcn4ivNCK1hzhl3rlFFFbYKp6ztnkdY41LOxCqoGSzHkAKj1aeHb4QXUE7AssciSMoxkhGBIGds4BoOv4dvRsbS4Hxhcf/AFpP+wrv/wDmn/8Aif8A7a0fEvpI4jLIzR3BjUk6EUKAq9BnTknHUmvRvoj45c3cU7XErSFZEClsbAqSRsBXPLK4zdi6eLrwC7P/ALWf/wCJ/wDtrl5wW5iTzJbeWNNQXU6MgLEEgAsBk4U8u1Xk3jzigZsXj4DNj7HQ/wANd4341mvLFba4OuRJlkWTCrlAjqVYKB6gWBBxy58t99NMjXDXKKqO1yiigKsuEIdRfoMDPux/lmq4CtDapotkbG7Pk/3goPwwKlqw62NOjoravuOQPhnl7NTljO0UqygKWRgwDLlSytsGU0mJwwGN8sFOOe2/8vvpwKM89s8/hzrDWmtsL9pS87ga5WycbABFCKBkknGCcnqTSr9wQAeWoE/2TqH4gGqvgMmqFGzzBz8Sxz+JqZdsfQO7gfgT+YH31ws/c6T0qvETM2AAcAEZHXfJyP8AXKs3xHiPmIGIxIpAfON8cm+ePv8AjWr4rK8QPoDg76eXLmQaw/ErhXOQhX2zmu+E45Ze3L+88wj0hQPiTnruTVm/FGREQDki56HkO1UWj1Y98Uu5k1OxHLO3wHKt6ZShxJgJFGcSAAgkncfH4mn/AAzKVvLdg2MSx5PsXCn8CRVakeQxyBpxt1OTjb86uvCUFvJcCO4Evr0pEYigIld1VSxcEBdzvzGBsaX0r3HxqwXQF0HVnHmM0agKM6Q6MGBIJIA5kdhivNPF7mK0MQjZNbJrDg7EZkXT2+0w74G9XfHuMvcShAEDQgFgsgjw3XDEjblj2INZHx3xtZXWCKQvGmGYh2kVpmX1lWYksB9nOd98bVxxxu5W7eaY89K9a8KSaraP+GvJWO9eleCJcw6c7rp2zvgqN8ds5rpn6Zx9s99INzqutGdkUDHYt6j+GmrPw1KFtVBYfrH4ZbP+NZHjd15txLJnOp2x/CDhfwApx7giJFBPI/j2pceaN9QZzqdj3Y/ia1HDYjdOkaDTBFuM/rOd2dgOZ7fIdTWZtoNWSThR9o9u2Pc1dcLuZZJFgt2KKeZXmQOZJ57f4+9WpG24rOsCIRkkN+jTqz43Zj2yck/5V5rxmMrO4PVi3LH2vV/jW0u3LMcsW0AKCeZwBkk9STvWb8TAEo4O5BU/2MEH/ix8qzhxrL0oaKKK6MCiiigK9p+gk/obn+sj/wCVq8Wr2b6CW/R3Q/fiP3rJ/Kufy/xq4+3lFvetDN5ihSysSAyq6nmCCrAggg16d9KHG5LK7jit0gWMxB2QwRMrEySLvqTOMIORFeSync/E17d454JZXfFIYri6eKRoVVFCLpkzJLgLIThWJyMFd/TgknFW3sW/bLeKeD20/DYeKQRLA5ISaNNoydTIWReS+pQQB0bfcbzfoy8NwyW8puNIa7WWC3BxnTGuqV0z1Dad+nlnvUDxnNctLDwaK38iKN1WJNRcylmIWVnA3Qks2w2JbO4wtrxrhnEYr63a0tJWgsRHHEQMCQL/AEzH+MlgT1GDU7rWx5Ze2zxSPE4w6MyMOzKSrD7wa9M4pcA+H4bjyoBLK5ieQQRhioaZdiF2bSijUN/nUD6ZOEeVdrcqCFuFDHIwRIgCuCOh0lD8S1O8VP8A+NWvvcN/z3NLdyX+yRY8G8GwX3CLbSUju8Tsj7AyKkzhlfG7KNSDVuVyOhwcjxy3khTyXQo8YCsDzBUD/wA5GxzkbGreSeRLDg7xsyOjXjBgcEYlB+48scjnFarVBxqExSYhvUXCuPsuo32HVOeV5oSSMjOZbZd30sZzw3xIrw+6YpCWhEDRO0MTOommZHGSnq2GxbOM/DFja3eOBTz+XD5scgjVzDGzBC0I3JX1MFkYajvy671WQcMltrPiMMqlHQWQIPIgTnDKeRU88ipVqurw/dKOZuUX5lrSl1vf9w+lv4C4BFLw1FYqkzSOyPyLehGCt+0NO+OYwSORqs4layRSiN1CujavV9nGGw2eq569akxOY+GwlSQVuXwQSCMRqRgjljAq5tr+DiSLbXWFnwRFJj7ew1D4nbKcm5jBG3Lu7VnIoOE8Wk/9YksUJaO1knjZo0fS6sq5BZMkHWDg5HpHvmr4B4fhkim4nfE/VoycInpMz5GQpGNKamCgLjc8wFNWVtwCe2a+hfcfUZwgO49Tw40Mdyhx15Y33G0jjEBPhuMRjHlODIoOcYmcMDjn6nVs/Oum/wAfbNZCbxzMGIt4oLWMA6UihjJP7Ot3Qlj77Z7U4nidrmCWK5gikkdQEnWGNJIyHQnUyqMqVDDYZ5c8nGLJ3rXcL4fc3aE28LSYwHCaQRt2JBx78q62SJGWuo1ViFbUOhqZwLiH1e4jn0hzG2sKSQCy7ruOzYPypjiFu0cjI40upwwyDgjmMgkH5VFU1UTOJ3rTzPK+AXYsQBgDPID2AwPlUPrQDUy/uI3KlIwmBggHOex+NBDrX+GeIMFwDuqMBsBuMkHOMnaseas+F3GnUvIkHHxKmpZuLKrKnFx5eD22586g13NVBmtn4Ys1jiaWRwhkGkZOCFB6fE/gBWLre8EeNo0LoGYKAMjOANh+VZz9NQcQmhij/Rktnrvkk+5rJXk5ddxjByPhyP8AhWq4txHDYZBp6DtWX4qwJBXrzFTAqtooorbIooooCvYvo44nw/h8Uglvo2eUoxVFkIQKpwCdG59Rz02rx2u5qZY+U0sul5xHhMCXCxx3kUkbnaXDqEXP/wCxSmQcfs5rTfSrxC3up47q2nWRVQRsAsisrK7vq9SgYw45HORXnteq/QffSedPDrby/L1hcnSH1ouoDkCQcHHPA7VnLk3+CdWHhnxjbz2qPeTRpdweYkEpSR3XXGUDuEXH62+/q0g7EV5ReSOjsom16SRrRnKt7rqAOPiBWj8TeL78Xtxou5lVJpFVUkZVCq7BRpUgHYDmKk8K8eGQiPicSXUJ2LOi+cgIxqR1AJxv79iKsmulWacRtLrg0dpcXkaXEbFoiwkOkAkKkjBNshmXbIACnfFR+I3dq3BIbQXcRnifzigEm4Yyny1YrjUBKPbKnfrUPx94KW0C3VsxktZcFTzMeoakBb9ZGH2W+R3wTmvDvCmu7qK2XYyOAT+yo9Tt8lDH5VJJZv8A6b09BvrSFOH2cYuEeSFJXHolVXS4kzqiZkAYAoRk4zuewOduOFX0TrL5VwiJh9YjkQJggg69Ow5b561tvFM0N5w0XNqAEtJWhwu+IVZUUgDpp8p/YF6rPBfEkuoX4TcPlZMtbPnJR1OsJ8ARqA9mX9YCsy320euvHMd3YyQSpm51RImEB+sASqfSAMBxudJ2zuvPAVFbCHhMkE5MMs04mRXimQejyjo1smnWViJ543FZnhHh7yZ55b9cQ2jASLz86Q7xRRk7ENsxP7BycA5pi64zPeXMk07ZOdKqPsooJ9KA8l2HxO53q+M+k215aE2CRfWE81ZDLo0yYwyadGrRjXsPbORnrWVv+LCEbwljkaX14AI5YA3GCKdWTAyaizXaIcSfZbuMjPvUxx1WrWhsPpCS4sLi3vDifyXSOXGTIGAyh7Psu/JtIzgjej8H+L0sw8DI09rLkSRMFBGoaWZDnBJXYqcZwNxjNV06WzA6dJONlUAM3sD0+6qW6kYHATyx2wQfmTua3MZ1jbUcQ8O8PkYtacQjQE/0V0rxsnddYVlbHf8AE86u/AlzZ8Mmeae9hclGRUgWSQ7sjkl9AUfYxjrnntXmOa5mrZuaqF6eZyNvvOT0pFFFUFFFLdCOYIzuMjG3egRT0MmHDf67UzTiSEEHnjoeVAu7j0uR05j4HcUxmpd24YKQckDB/P8AnUSgK2PCHHlrh8HSNhjtWOq74fxLYISFI2DEZGPepZtY0wt4idTfeTWY8QzKz4RcKB99WSWh+00pf2wMfcKqOLw76qki2qqiiitMiiiigKKKKAr036DP98n/AKj/AKsdeZV6b9Bg/wDVz/1H/VjrHyfxqz2wXH/96uP62T/naq+rDj3+9T/1sn/O1c4Rwme6kEUEbSOeijYDux5KPc7Vr6L7eu+Hj5/huVJBkRx3AXO/9ETKhGexwB/DWU8GWccNncXck6W7Thra3d1dgAcGdlVATnThQ3Q5+FaTxVxCHhnDU4Wrh5mXTLpIyqOxeZtxsW1FVBGcHPTfC+JvEVvc29vBDbvCLYMq5kDhlfdywCL6ywByNt225Y54S9/FpW4+juK1jaSzN7FOlzGU0KkqMxGo5UuoX7LOOeT6e2K85vrWS2uZY3Y+ZCzDUNt0YFHXHLOAw+IpHCb5IZ4JSrHyyjnSwViUOoAMQcbgZ25Zq48V+Ira+nE/1d4nOkS4lVg6KMZX0DEmABk5GAMitSWU+mp+lK5eRbDUxw8XmuOSs7LGCxA2zvgdgSBzrz2ykbW+DsWOBjIzk8/8sVovFvi6K7jg0wNE0K6EzKHBjIUeoaAdQ0rgg9T8s1Z3CpIwbbLHB6b96uM1NVbVqkjnGsYI7cv5j51HngWaQoXKlQDjuTufuyKk3FyI0Ldht7k8qzSXLB9YPqznPx51YVYvw1FPKRv4QB+JpcnmKANWhOzsHJ+RH4Cn7O8d/U2Me340h7aORi5YnP4ewoipvNGr09t8DAz7DtUarLiXD1QBlYnJxg/zqHlNHXVn5Ee9VDNFBooCusxPOuUUBRRQKBa7gj50inYHwabIwaDlWNnPGGUFevPA67VXVaWVq2kOFBJ5EnYfLqaC2MbA5DnHbbFVPEVfJLNsc7dqlfVXb7cjZ7LsBVfxGDTpGSefM5NSLUGiiiqgooooCiiigK0fhvxdcWKssCxAucs7Jqc
            jbC6s/Z2zjuazlFLJfY1U/jWSRy8lrZO5OWZrZCWJ5lj1PuaVP9IF+U8qKRY
            8Y0W8aRD5FRqHyIrJ0U1A5JIWJZiSSckncknmSeppsCgUUDkp3wOlNg0GigWDv3/AMqVLzz7fltTWaUWoFGRsacnHbO1N0UUEy2vCo0kAgffU+DiSnoFA+81SUUNtDcXiMhDbjtWeNBNFB0VyiigKKKKAooooFJzpJoBoJoCrPhtyyjAQsM9D/hVdGMkDuRV4saRjOD74oHmnLKcZU+4wRWfmcliWOT3qwur5
            SMKCe5/wqrJoCiiigKKKKAooooCiiigKKKKAozRRQKVc1wqa5StZxigTRRRQFFFFAUUUUBRRRQFFFFAUUUUBRRRQFFFFA9bg6hgbirZHYD1AY9jn86rrD7R7VNmQEc8UVFuwuSyke4qDUiSNRk6gfao9EFFFFAUUUUBRRRQFFFFAUUUUBRRRQFFFFAUUUUBRRRQFFFFAUUUUBRRRQFFFFAUUUUBQaKKCVacj8qcn5/MUUUEWf7VN0UUBRRRQf/Z" 
            alt="Training Day"></img>
            <p>This is a film about coding</p>
            <h2>Movie title</h2>
            <p>Number of likes...</p>
            
    </div>
    )
}

export default VideoCard
